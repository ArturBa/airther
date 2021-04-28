import { AirQuality } from 'src/app/forecast/models/air-quality.model';
import { AirQualityIndexEnum } from 'src/app/shared/enums/air-quality-index.enum';
import { AirQualityDto } from './open-weather.model';

export abstract class AirQualityMapper {
  private static readonly airQualityStandards: Map<string, number> = new Map<
    string,
    number
  >([
    ['pm2_5', 25],
    ['pm10', 50],
  ]);

  private static readonly airQualityIndexImages: Map<
    AirQualityIndexEnum,
    string
  > = new Map<AirQualityIndexEnum, string>([
    [AirQualityIndexEnum.Good, 'assets/images/quality-good.svg'],
    [AirQualityIndexEnum.Fair, 'assets/images/quality-fair.svg'],
    [AirQualityIndexEnum.Moderate, 'assets/images/quality-moderate.svg'],
    [AirQualityIndexEnum.Poor, 'assets/images/quality-poor.svg'],
    [AirQualityIndexEnum.VeryPoor, 'assets/images/quality-very-poor.svg'],
  ]);

  private static getPercentageOfStandardValue(
    component: string,
    value: number
  ): number {
    return Math.round((value / this.airQualityStandards.get(component)) * 100);
  }

  static Map(airQuality: AirQualityDto): AirQuality {
    return {
      time: airQuality.dt,
      index: airQuality.main.aqi,
      indexImageUrl: this.airQualityIndexImages.get(airQuality.main.aqi),
      components: [
        {
          name: 'PM 2.5',
          value: airQuality.components.pm2_5,
          percentageOfStandardValue: this.getPercentageOfStandardValue(
            'pm2_5',
            airQuality.components.pm2_5
          ),
        },
        {
          name: 'PM 10',
          value: airQuality.components.pm10,
          percentageOfStandardValue: this.getPercentageOfStandardValue(
            'pm10',
            airQuality.components.pm10
          ),
        },
      ],
    };
  }
}

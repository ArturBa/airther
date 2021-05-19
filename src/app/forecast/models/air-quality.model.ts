import { AirQualityIndexEnum } from 'src/app/shared/enums/air-quality-index.enum';
import { AirQualityComponent } from './air-quality-component.model';

export interface AirQuality {
  dt: number;
  index: AirQualityIndexEnum;
  indexImageUrl: string;
  components: AirQualityComponent[];
}

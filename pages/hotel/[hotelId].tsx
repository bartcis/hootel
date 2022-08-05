import { getPersistiveLayout } from '../../components';
import { PageType } from '../../models/layout';
import { HotelDetails } from '../../page-components';

export const HotelDetailsPage: PageType = () => <HotelDetails />;

HotelDetailsPage.getLayout = getPersistiveLayout;

export default HotelDetailsPage;

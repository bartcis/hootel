import { getPersistiveLayout } from '../components';
import { PageType } from '../models/layout';
import { HotelList } from '../page-components';

export const Index: PageType = () => <HotelList />;

Index.getLayout = getPersistiveLayout;

export default Index;

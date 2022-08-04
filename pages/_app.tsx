import { AppPageType } from "../models/layout";
import { AppComponent } from '../page-components';

function App(props: AppPageType) {
  return <AppComponent {...props} />;
}

export default App;

import PathContext from './PathContext';
import PageResources from './PageResources';

interface PageProps {
  location: Location;
  pageResources?: PageResources;
  pathContext: PathContext;
}

export default PageProps;

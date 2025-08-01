import OriginalTOC from '@theme-original/TOC';
import type { Props } from '@theme/TOC';

export default function TOC(props: Props): JSX.Element {
  return <OriginalTOC {...props} />;
}
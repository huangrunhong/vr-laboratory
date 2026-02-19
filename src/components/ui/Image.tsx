import { Image as UikitImage, type ImageProperties } from '@react-three/uikit';

const Image = ({ src, ...rest }: ImageProperties) => (
  <UikitImage src={import.meta.env.BASE_URL + src} {...rest} />
);

export default Image;

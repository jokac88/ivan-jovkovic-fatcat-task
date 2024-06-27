import Marquee from 'react-fast-marquee';

import { TrustBarProps } from '@homework-task/types/AppTypes.ts';

export const TrustBar = ({ images }: TrustBarProps) => {
    return (
        <Marquee>
            {images.map((image, index) => (
                <img
                    width={100}
                    key={image}
                    src={image}
                    className="mx-10"
                    alt={`Image ${index}`}
                />
            ))}
        </Marquee>
    );
};

import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { SwiperOptions, Swiper as SwiperType } from 'swiper/types';

interface SwiperProps extends SwiperOptions {
     children: React.ReactNode;
}

type SwiperElement = HTMLElement & SwiperType;

export function Swiper(props: SwiperProps) {
  const swiperRef = useRef<SwiperElement>(null);
  const {
    children,
    ...rest
  } = props;

  useEffect(() => {
    register();
    const params = {
      ...rest
    };
    if(swiperRef.current){
    Object.assign(swiperRef.current, params);
    // @ts-expect-error
    (swiperRef.current as SwiperType).initialize();
    }
  }, []);

  return (
    <swiper-container init={false} ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

interface SwiperSlideProps {
    children: React.ReactNode;
}

export function SwiperSlide(props: SwiperSlideProps) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide {...rest}>
      {children}
    </swiper-slide>
  );
}
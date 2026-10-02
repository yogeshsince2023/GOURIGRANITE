'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Zoom } from 'swiper/modules';
import { StoneItem } from '@/lib/data';
import { STONE_BLUR_DATA_URL } from '@/lib/cloudinary';
import styles from './ProductGallery.module.css';

// Import Swiper styles lazily inside lightbox
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

function getOptimizedGalleryUrl(url: string, width: number = 1400): string {
    if (!url || !url.includes('res.cloudinary.com')) return url;
    const uploadMarker = '/upload/';
    const index = url.indexOf(uploadMarker);
    if (index === -1) return url;
    const preUpload = url.substring(0, index + uploadMarker.length);
    const postUpload = url.substring(index + uploadMarker.length);
    return `${preUpload}f_auto,q_auto,w_${width}/${postUpload}`;
}

interface ProductLightboxProps {
    stones: StoneItem[];
    initialSlide: number;
    onClose: () => void;
}

export default function ProductLightbox({ stones, initialSlide, onClose }: ProductLightboxProps) {
    return (
        <div className={styles.lightboxOverlay}>
            <button className={styles.lightboxClose} onClick={onClose} aria-label="Close Lightbox">
                &times;
            </button>
            <Swiper
                modules={[Navigation, Pagination, Zoom, Keyboard]}
                initialSlide={initialSlide}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                zoom={{ maxRatio: 3 }}
                keyboard={{ enabled: true }}
                loop={true}
                className={styles.lightboxSwiper}
            >
                {stones.map((stone, index) => (
                    <SwiperSlide key={`lightbox-${stone.id}-${index}`} className={styles.lightboxSlide}>
                        <div className="swiper-zoom-container">
                            <Image
                                src={getOptimizedGalleryUrl(stone.url, 1400)}
                                alt={`${stone.title} - ${stone.category}`}
                                width={1600}
                                height={1200}
                                className={styles.lightboxImage}
                                priority={false}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={STONE_BLUR_DATA_URL}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

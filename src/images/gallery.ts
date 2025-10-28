
import { StaticImageData } from 'next/image';

import barongStatue from '../../public/images/barong-statue.jpg';
import nusaPenidaBeach from '../../public/images/nusa-penida-beach.jpg';
import kedongananSunset from '../../public/images/kedonganan-sunset.jpg';
import avanza from '../../public/images/avanza.png';
import xpander from '../../public/images/xpander.png';
import allNewAvanza from '../../public/images/all-new-avanza.png';
import innovaReborn from '../../public/images/innova-reborn.webp';
import hiaceCommuter from '../../public/images/hiace-commuter.png';
import hiacePremio from '../../public/images/hiace-premio.png';
import toyotaAlphard from '../../public/images/toyota-alphard.png.webp';
import toyotaVellfire from '../../public/images/toyota-vellfire.png';

export type ImageGallery = {
  id: string;
  description: string;
  imageUrl: {
    src: string;
  };
  imageHint: string;
};

export const ImageGalleryData: ImageGallery[] = [
    {
      "id": "hero-bali-1",
      "description": "Patung Barong",
      "imageUrl": barongStatue,
      "imageHint": "barong statue"
    },
    {
      "id": "hero-bali-2",
      "description": "Pantai Nusa Penida",
      "imageUrl": nusaPenidaBeach,
      "imageHint": "nusa penida beach"
    },
    {
      "id": "hero-bali-3",
      "description": "Sunset Kedonganan",
      "imageUrl": kedongananSunset,
      "imageHint": "kedonganan sunset"
    },
    {
      "id": "avanza-car",
      "description": "A large van for groups",
      "imageUrl": avanza,
      "imageHint": "van car"
    },
    {
      "id": "xpander-car",
      "description": "The Mitsubishi Xpander",
      "imageUrl": xpander,
      "imageHint": "Mitsubishi Xpander"
    },
    {
      "id": "all-new-avanza",
      "description": "The All New Avanza",
      "imageUrl": allNewAvanza,
      "imageHint": "all new avanza"
    },
    {
      "id": "innova-reborn",
      "description": "The Toyota Innova Reborn",
      "imageUrl": innovaReborn,
      "imageHint": "Toyota Innova Reborn"
    },
    {
      "id": "hiace-commuter",
      "description": "The Toyota Hiace Commuter",
      "imageUrl": hiaceCommuter,
      "imageHint": "Toyota Hiace Commuter"
    },
    {
      "id": "hiace-premio",
      "description": "The Toyota Hiace Premio",
      "imageUrl": hiacePremio,
      "imageHint": "Toyota Hiace Premio"
    },
    {
      "id": "toyota-alphard",
      "description": "The Toyota Alphard",
      "imageUrl": toyotaAlphard,
      "imageHint": "The Toyota Alphard"
    },
    {
      "id": "toyota-vellfire",
      "description": "The Toyota Vellfire",
      "imageUrl": toyotaVellfire,
      "imageHint": "The Toyota Vellfire"
    }
  ]

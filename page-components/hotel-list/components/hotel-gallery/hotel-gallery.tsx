import React, { FC } from 'react';
import Image from 'next/image';

import { Dialog, DialogContent, DialogTitle, ImageList, ImageListItem } from '@mui/material';

type HotelGalleryProps = {
  images: { url: string }[];
  isOpen: boolean;
  handleClose: () => void;
};

export const HotelGallery: FC<HotelGalleryProps> = ({ images, isOpen, handleClose }) => {
  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Hotel Gallery</DialogTitle>
      <DialogContent dividers>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {images.map((image) => (
            <ImageListItem key={image.url}>
              <Image src={`${image.url}?w=164&h=164&fit=crop&auto=format`} alt={image.url} width={400} height={400} />
            </ImageListItem>
          ))}
        </ImageList>
      </DialogContent>
    </Dialog>
  );
};

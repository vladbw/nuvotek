import { Image } from "./Gallery";

export type TabContent = {
    label: string;
    images: Image[];
  };

export const tabContents: TabContent[] = [
    { label: 'ARHITECTURĂ', images: [
        { id: 11, src: './ARHITECTURĂ/2.png', thumbnailSrc: './ARHITECTURĂ/2-thumbnail.png', alt: 'Image 11' },
        { id: 12, src: './ARHITECTURĂ/3.png', thumbnailSrc: './ARHITECTURĂ/3-thumbnail.png', alt: 'Image 12' },
        { id: 13, src: './ARHITECTURĂ/4.png', thumbnailSrc: './ARHITECTURĂ/4-thumbnail.png', alt: 'Image 13' },
        { id: 14, src: './ARHITECTURĂ/5.png', thumbnailSrc: './ARHITECTURĂ/5-thumbnail.png', alt: 'Image 14' },
        { id: 15, src: './ARHITECTURĂ/6.png', thumbnailSrc: './ARHITECTURĂ/6-thumbnail.png', alt: 'Image 15' },
        { id: 16, src: './ARHITECTURĂ/7.png', thumbnailSrc: './ARHITECTURĂ/7-thumbnail.png', alt: 'Image 16' },
        { id: 17, src: './ARHITECTURĂ/8.png', thumbnailSrc: './ARHITECTURĂ/8-thumbnail.png', alt: 'Image 17' },
        { id: 18, src: './ARHITECTURĂ/9.png', thumbnailSrc: './ARHITECTURĂ/9-thumbnail.png', alt: 'Image 18' },
        { id: 19, src: './ARHITECTURĂ/Untitled-1.png', thumbnailSrc: './ARHITECTURĂ/Untitled-1-thumbnail.png', alt: 'Image 19' },
        { id: 110, src: './ARHITECTURĂ/Untitled-2.png', thumbnailSrc: './ARHITECTURĂ/Untitled-2-thumbnail.png', alt: 'Image 110' },
        { id: 111, src: './ARHITECTURĂ/Untitled-3.png', thumbnailSrc: './ARHITECTURĂ/Untitled-3-thumbnail.png', alt: 'Image 111' },
        { id: 112, src: './ARHITECTURĂ/Untitled-14.png', thumbnailSrc: './ARHITECTURĂ/Untitled-14-thumbnail.png', alt: 'Image 112' },
        { id: 113, src: './ARHITECTURĂ/Untitled-15.png', thumbnailSrc: './ARHITECTURĂ/Untitled-15-thumbnail.png', alt: 'Image 113' },
        { id: 114, src: './ARHITECTURĂ/Untitled-17.png', thumbnailSrc: './ARHITECTURĂ/Untitled-17-thumbnail.png', alt: 'Image 114' },
        { id: 115, src: './ARHITECTURĂ/Untitled-22.png', thumbnailSrc: './ARHITECTURĂ/Untitled-22-thumbnail.png', alt: 'Image 115' },
        { id: 116, src: './ARHITECTURĂ/Untitled-23.png', thumbnailSrc: './ARHITECTURĂ/Untitled-23-thumbnail.png', alt: 'Image 116' },
        { id: 117, src: './ARHITECTURĂ/Untitled-24.png', thumbnailSrc: './ARHITECTURĂ/Untitled-24-thumbnail.png', alt: 'Image 117' },
        { id: 118, src: '../ARHITECTURĂ/Untitled-25.png', thumbnailSrc: '../ARHITECTURĂ/Untitled-25-thumbnail.png', alt: 'Image 118' },
        { id: 119, src: './ARHITECTURĂ/Untitled-26.png', thumbnailSrc: './ARHITECTURĂ/Untitled-26-thumbnail.png', alt: 'Image 119' },
        { id: 120, src: './ARHITECTURĂ/Untitled-27.png', thumbnailSrc: './ARHITECTURĂ/Untitled-27-thumbnail.png', alt: 'Image 120' },
        { id: 121, src: './ARHITECTURĂ/Untitled-32.png', thumbnailSrc: './ARHITECTURĂ/Untitled-32-thumbnail.png', alt: 'Image 121' },
        { id: 122, src: './ARHITECTURĂ/Untitled-34.png', thumbnailSrc: './ARHITECTURĂ/Untitled-34-thumbnail.png', alt: 'Image 122' },
        { id: 123, src: './ARHITECTURĂ/Untitled-36.png', thumbnailSrc: './ARHITECTURĂ/Untitled-36-thumbnail.png', alt: 'Image 123' },
        { id: 124, src: './ARHITECTURĂ/Untitled-46.png', thumbnailSrc: './ARHITECTURĂ/Untitled-46-thumbnail.png', alt: 'Image 124' },
        { id: 125, src: './ARHITECTURĂ/Untitled-47.png', thumbnailSrc: './ARHITECTURĂ/Untitled-47-thumbnail.png', alt: 'Image 125' },
        { id: 126, src: './ARHITECTURĂ/Untitled-48.png', thumbnailSrc: './ARHITECTURĂ/Untitled-48-thumbnail.png', alt: 'Image 126' },
        { id: 127, src: './ARHITECTURĂ/Untitled-49.png', thumbnailSrc: './ARHITECTURĂ/Untitled-49-thumbnail.png', alt: 'Image 127' },
        { id: 128, src: './ARHITECTURĂ/Untitled-55.png', thumbnailSrc: './ARHITECTURĂ/Untitled-55-thumbnail.png', alt: 'Image 128' },
        { id: 129, src: './ARHITECTURĂ/Untitled-56.png', thumbnailSrc: './ARHITECTURĂ/Untitled-56-thumbnail.png', alt: 'Image 129' },
        { id: 130, src: './ARHITECTURĂ/Untitled-60.png', thumbnailSrc: './ARHITECTURĂ/Untitled-60-thumbnail.png', alt: 'Image 130' },
        { id: 131, src: './ARHITECTURĂ/Untitled-62.png', thumbnailSrc: './ARHITECTURĂ/Untitled-62-thumbnail.png', alt: 'Image 131' },
        { id: 132, src: './ARHITECTURĂ/Untitled-64.png', thumbnailSrc: './ARHITECTURĂ/Untitled-64-thumbnail.png', alt: 'Image 132' },
        { id: 133, src: './ARHITECTURĂ/Untitled-65.png', thumbnailSrc: './ARHITECTURĂ/Untitled-65-thumbnail.png', alt: 'Image 133' },
        { id: 134, src: './ARHITECTURĂ/Untitled-66.png', thumbnailSrc: './ARHITECTURĂ/Untitled-66-thumbnail.png', alt: 'Image 134' },
        { id: 135, src: './ARHITECTURĂ/Untitled-68.png', thumbnailSrc: './ARHITECTURĂ/Untitled-68-thumbnail.png', alt: 'Image 135' },
        { id: 136, src: './ARHITECTURĂ/Untitled-69.png', thumbnailSrc: './ARHITECTURĂ/Untitled-69-thumbnail.png', alt: 'Image 136' },
        { id: 137, src: './ARHITECTURĂ/Untitled-70.png', thumbnailSrc: './ARHITECTURĂ/Untitled-70-thumbnail.png', alt: 'Image 137' },
        { id: 138, src: './ARHITECTURĂ/Untitled-71.png', thumbnailSrc: './ARHITECTURĂ/Untitled-71-thumbnail.png', alt: 'Image 138' },
        { id: 139, src: './ARHITECTURĂ/Untitled-75.png', thumbnailSrc: './ARHITECTURĂ/Untitled-75-thumbnail.png', alt: 'Image 139' },
        { id: 140, src: './ARHITECTURĂ/Untitled-77.png', thumbnailSrc: './ARHITECTURĂ/Untitled-77-thumbnail.png', alt: 'Image 140' },
        { id: 141, src: './ARHITECTURĂ/Untitled-78.png', thumbnailSrc: './ARHITECTURĂ/Untitled-78-thumbnail.png', alt: 'Image 141' },
        { id: 142, src: './ARHITECTURĂ/Untitled-79.png', thumbnailSrc: './ARHITECTURĂ/Untitled-79-thumbnail.png', alt: 'Image 142' },
        { id: 143, src: './ARHITECTURĂ/Untitled-80.png', thumbnailSrc: './ARHITECTURĂ/Untitled-80-thumbnail.png', alt: 'Image 143' }
    ]},
    { label: 'DESIGN INTERIOR', images: [
        { id: 21, src: './DESIGN INTERIOR/11.png', thumbnailSrc: './DESIGN INTERIOR/11-thumbnail.png', alt: 'Image 21' },
        { id: 22, src: './DESIGN INTERIOR/12.png', thumbnailSrc: './DESIGN INTERIOR/12-thumbnail.png', alt: 'Image 22' },
        { id: 23, src: './DESIGN INTERIOR/Untitled-13.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-13-thumbnail.png', alt: 'Image 23' },
        { id: 24, src: './DESIGN INTERIOR/Untitled-28.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-28-thumbnail.png', alt: 'Image 24' },
        { id: 25, src: './DESIGN INTERIOR/Untitled-29.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-29-thumbnail.png', alt: 'Image 25' },
        { id: 26, src: './DESIGN INTERIOR/Untitled-30.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-30-thumbnail.png', alt: 'Image 26' },
        { id: 27, src: './DESIGN INTERIOR/Untitled-31.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-31-thumbnail.png', alt: 'Image 27' },
        { id: 28, src: './DESIGN INTERIOR/Untitled-33.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-33-thumbnail.png', alt: 'Image 28' },
        { id: 29, src: './DESIGN INTERIOR/Untitled-51.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-51-thumbnail.png', alt: 'Image 29' },
        { id: 210, src: './DESIGN INTERIOR/Untitled-52.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-52-thumbnail.png', alt: 'Image 210' },
        { id: 211, src: './DESIGN INTERIOR/Untitled-53.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-53-thumbnail.png', alt: 'Image 211' },
        { id: 212, src: './DESIGN INTERIOR/Untitled-59.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-59-thumbnail.png', alt: 'Image 212' },
        { id: 213, src: './DESIGN INTERIOR/Untitled-67.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-67-thumbnail.png', alt: 'Image 213' },
        { id: 214, src: './DESIGN INTERIOR/Untitled-73.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-73-thumbnail.png', alt: 'Image 214' },
        { id: 215, src: './DESIGN INTERIOR/Untitled-74.png', thumbnailSrc: './DESIGN INTERIOR/Untitled-74-thumbnail.png', alt: 'Image 215' }
    ]
    
    },
    { label: 'FASHION DESIGN', images: [
        { id: 31, src: './FASHION DESIGN/Untitled-1.png', thumbnailSrc: './FASHION DESIGN/Untitled-1-thumbnail.png', alt: 'Image 31' },
        { id: 32, src: './FASHION DESIGN/Untitled-18.png', thumbnailSrc: './FASHION DESIGN/Untitled-18-thumbnail.png', alt: 'Image 32' },
        { id: 33, src: './FASHION DESIGN/Untitled-19.png', thumbnailSrc: './FASHION DESIGN/Untitled-19-thumbnail.png', alt: 'Image 33' },
        { id: 34, src: './FASHION DESIGN/Untitled-20.png', thumbnailSrc: './FASHION DESIGN/Untitled-20-thumbnail.png', alt: 'Image 34' },
        { id: 35, src: './FASHION DESIGN/Untitled-21.png', thumbnailSrc: './FASHION DESIGN/Untitled-21-thumbnail.png', alt: 'Image 35' },
        { id: 36, src: './FASHION DESIGN/Untitled-61.png', thumbnailSrc: './FASHION DESIGN/Untitled-61-thumbnail.png', alt: 'Image 36' }
    ]},
    { label: 'GAME DESIGN', images: [
        { id: 41, src: './GAME & CHARACTER DESIGN/Untitled-16.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-16-thumbnail.png', alt: 'Image 41' }, 
        { id: 42, src: './GAME & CHARACTER DESIGN/Untitled-37.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-37-thumbnail.png', alt: 'Image 42' }, 
        { id: 43, src: './GAME & CHARACTER DESIGN/Untitled-38.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-38-thumbnail.png', alt: 'Image 43' },
        { id: 44, src: './GAME & CHARACTER DESIGN/Untitled-39.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-39-thumbnail.png', alt: 'Image 44' },
        { id: 45, src: './GAME & CHARACTER DESIGN/Untitled-40.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-40-thumbnail.png', alt: 'Image 45' },
        { id: 46, src: './GAME & CHARACTER DESIGN/Untitled-41.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-41-thumbnail.png', alt: 'Image 46' },
        { id: 47, src: './GAME & CHARACTER DESIGN/Untitled-42.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-42-thumbnail.png', alt: 'Image 47' },
        { id: 48, src: './GAME & CHARACTER DESIGN/Untitled-43.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-43-thumbnail.png', alt: 'Image 48' },
        { id: 49, src: './GAME & CHARACTER DESIGN/Untitled-44.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-44-thumbnail.png', alt: 'Image 49' },
        { id: 410, src: './GAME & CHARACTER DESIGN/Untitled-45.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-45-thumbnail.png', alt: 'Image 410' },
        { id: 411, src: './GAME & CHARACTER DESIGN/Untitled-50.png', thumbnailSrc: './GAME & CHARACTER DESIGN/Untitled-50-thumbnail.png', alt: 'Image 411' }
    ]},
    {
        label: 'OUR STUDIO', images: [
            { id: 51, src: './OUR STUDIO/Untitled-1.png', thumbnailSrc: './OUR STUDIO/Untitled-1-thumbnail.png', alt: 'Image 41' }, 
            { id: 52, src: './OUR STUDIO/Untitled-2.png', thumbnailSrc: './OUR STUDIO/Untitled-2-thumbnail.png', alt: 'Image 42' }, 
            { id: 53, src: './OUR STUDIO/Untitled-3.png', thumbnailSrc: './OUR STUDIO/Untitled-3-thumbnail.png', alt: 'Image 43' },
            { id: 54, src: './OUR STUDIO/Untitled-4.png', thumbnailSrc: './OUR STUDIO/Untitled-4-thumbnail.png', alt: 'Image 44' },
            { id: 55, src: './OUR STUDIO/Untitled-5.png', thumbnailSrc: './OUR STUDIO/Untitled-5-thumbnail.png', alt: 'Image 45' },
            { id: 56, src: './OUR STUDIO/Untitled-6.png', thumbnailSrc: './OUR STUDIO/Untitled-6-thumbnail.png', alt: 'Image 46' },
            { id: 57, src: './OUR STUDIO/Untitled-7.png', thumbnailSrc: './OUR STUDIO/Untitled-7-thumbnail.png', alt: 'Image 47' },
            { id: 58, src: './OUR STUDIO/Untitled-8.png', thumbnailSrc: './OUR STUDIO/Untitled-8-thumbnail.png', alt: 'Image 48' },
            { id: 59, src: './OUR STUDIO/Untitled-9.png', thumbnailSrc: './OUR STUDIO/Untitled-9-thumbnail.png', alt: 'Image 49' },
            { id: 510, src: './OUR STUDIO/Untitled-10.png', thumbnailSrc: './OUR STUDIO/Untitled-10-thumbnail.png', alt: 'Image 410' }
        ]
    },
    {
        label: 'PRODUCT DESIGN', images: [
            { id: 61, src: './PRODUCT DESIGN/10.png', thumbnailSrc: './PRODUCT DESIGN/10-thumbnail.png', alt: 'Image 41' }, 
            { id: 62, src: './PRODUCT DESIGN/Untitled-35.png', thumbnailSrc: './PRODUCT DESIGN/Untitled-35-thumbnail.png', alt: 'Image 42' }, 
            { id: 63, src: './PRODUCT DESIGN/Untitled-72.png', thumbnailSrc: './PRODUCT DESIGN/Untitled-72-thumbnail.png', alt: 'Image 43' },
            { id: 64, src: './PRODUCT DESIGN/Untitled-76.png', thumbnailSrc: './PRODUCT DESIGN/Untitled-76-thumbnail.png', alt: 'Image 44' }
        ]
    }
    // { label: 'SCENOGRAFIE', images: [
    //     { id: 71, src: './SCENOGRAFIE/Untitled-57.png', thumbnailSrc: './/Untitled-57-thumbnail.png', alt: 'Image 71' }, 
    // ]},
  ];
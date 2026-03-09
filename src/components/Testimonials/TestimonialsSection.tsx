import Slider from 'react-slick';
import './TestimonialsSection.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ITestimonial } from './Testimonials';

function splitArrayIntoChunks<T>(arr: T[], x: number, y: number): T[][] {
    if (x * y !== arr.length) {
        throw new Error('The product of x and y must equal the length of the array');
    }

    const result: T[][] = [];

    for (let i = 0; i < x; i++) {
        result.push(arr.slice(i * y, i * y + y));
    }

    return result;
}

export interface TestimonialsSectionProps {
    testimonials: ITestimonial[];
    chunkSize?: number;
}

function TestimonialsSection({ testimonials, chunkSize }: TestimonialsSectionProps) {
    chunkSize = chunkSize || 3;
    const translate = useTranslation().t;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    let chunks = splitArrayIntoChunks(testimonials, testimonials.length / chunkSize, chunkSize);

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth > 700) {
        return <div className="testimonials-container width-70-large-res">
            <h1 className='h1-nuvotek'>{translate("testimonials_title")}</h1>
            {chunks.map((chunk, id) => <div className='testimonials-chunk' key={`testimonial-chunk-${id}`}>
                {chunk.map(testiomnial => <div className='testimonial-single box-shadow-nuvotek round-corners-nuvotek' key={'testimonial-' + testiomnial.name}>
                    <p className='testimonial-text-par'>{translate(testiomnial.text)}</p>
                    <p className='testimonial-name-par'>
                        {testiomnial.name}{testiomnial.title ? <>
                            {", "}
                            <span className='testimonial-title-par'>{translate(testiomnial.title)}</span>
                        </> : null}
                    </p>
                </div>)}
            </div>)}
        </div>
    } else {
        return <div className="testimonials-container-mobile">
            <h1 className='h1-nuvotek'>{translate("testimonials_title")}</h1>
            <Slider {...sliderSettings}>
                {testimonials.map(testiomnial => <div className='testimonial-single-mobile' key={'testimonial-' + testiomnial.name}>
                    <p className='testimonial-text-par'>{translate(testiomnial.text)}</p>
                    <p className='testimonial-name-par'>
                        {testiomnial.name}{testiomnial.title ? <>
                            {", "}
                            <span className='testimonial-title-par'>{translate(testiomnial.title)}</span>
                        </> : null}
                    </p>
                </div>)}
            </Slider>
        </div>
    }
}

export default TestimonialsSection;

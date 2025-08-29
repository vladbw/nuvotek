import Slider from 'react-slick';
import './TestimonialsSection.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


interface ITestimonial {
    text: string;
    name: string;
}

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

function TestimonialsSection() {

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

    const testimonials: ITestimonial[] = [
        {
            text: "testimonial_text_1",
            name: "Mara"
        },
        {
            text: "testimonial_text_2",
            name: "Roxana"
        },
        {
            text: "testimonial_text_3",
            name: "Irina"
        },
        {
            text: "testimonial_text_4",
            name: "Vlad"
        },
        {
            text: "testimonial_text_5",
            name: "Gabriela"
        },
        {
            text: "testimonial_text_6",
            name: "George Andrei"
        }
    ];

    let chunks = splitArrayIntoChunks(testimonials, 2, 3);

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
                            <p className='testimonial-name-par'>{testiomnial.name}</p>
                        </div>)}
                    </div>)}
                </div>
    } else {
            return  <div className="testimonials-container-mobile">
                <h1 className='h1-nuvotek'>{translate("testimonials_title")}</h1>
                <Slider {...sliderSettings}>
                        {testimonials.map(testiomnial => <div className='testimonial-single-mobile' key={'testimonial-' + testiomnial.name}> 
                            <p className='testimonial-text-par'>{translate(testiomnial.text)}</p>
                            <p className='testimonial-name-par'>{testiomnial.name}</p>
                        </div>)}
                </Slider>
            </div>
    }
  }
  
  export default TestimonialsSection;
  
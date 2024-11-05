import Slider from 'react-slick';
import './TestimonialsSection.css';
import { useState, useEffect } from 'react';


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
            text: "Cursurile de la Nuvotek m-au pregătit pentru facultate. Nu doar sa întru la facultate, dar și pentru ce mă așteaptă acolo. Mi-a dat încredere în abilitățile mele, m-a învățat de unde sa apuc un proiect, cum sa privesc un concept nou și cum sa îmi organizez ideile și timpul. Pregătirea a fost mereu serioasă și productivă, cu cea mai călduroasă și vesela atmosfera. Îmi este foarte dor de o zi la studio!",
            name: "Mara"
        },
        {
            text: "Sunt profund recunoscătoare Cristinei și cursurilor pentru ca acestea m-au ajutat enorm să-mi dezvolt stilul, tehnicile și să am încredere în mine. S-a văzut mereu diferenta la facultate, desenul de mână și schițatul ideilor a fost mereu foarte apreciat de către domnii profesori de la facultate.",
            name: "Roxana"
        },
        {
            text: "Pregatirea este serioasă, modul de predare mi se pare foarte eficient, iar materialele pe care le-am avut la dispoziție sunt diverse și numeroase. Am fost încurajați să lucrăm individual, în funcție de drumul pe care vrem să-l urmăm, dar și să ne motivam unii pe ceilalți, lucrând împreună la studio.",
            name: "Irina"
        },
        {
            text: "Nuvotek m-a ajutat enorm să mă pregătesc pentru domeniul în care visez să lucrez, chiar și de la nivelul de începător la care eram. Comunitate primitoare, feedback constructiv și atmosferă mișto",
            name: "Vlad"
        },
        {
            text: "Experiența Nuvotek m-a ajutat să mă dezvolt nu numai din punct de vedere al aptitudinilor profesionale, dar și personal prin susținere și devotament din partea profesorilor. De asemenea, un rol la fel de important în cadrul formării mele l-a avut colectivul alcătuit din persoane care aveau un interes comun cu al meu, cu care mereu am putut dezbate subiecte care îți pun mintea la contribuție.",
            name: "Gabriela"
        },
        {
            text: "La Nuvotek am descoperit o comunitate complexă, unde oamenii vin să învețe și primesc ca bonus atmosfera extraordinar de caldă, până la proiectele și pauzele de cafea aferente. Am învățat tehnici de desen diferite care la care apelez în situații diferite ceea ce contribuie la consolidarea stilului flexibil de abordare a unui proiect/concept.",
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
                    <h1 className='h1-nuvotek'>Testimoniale</h1>
                    {chunks.map((chunk, id) => <div className='testimonials-chunk' key={`testimonial-chunk-${id}`}>
                        {chunk.map(testiomnial => <div className='testimonial-single box-shadow-nuvotek round-corners-nuvotek' key={'testimonial-' + testiomnial.name}> 
                            <p className='testimonial-text-par'>{testiomnial.text}</p>
                            <p className='testimonial-name-par'>{testiomnial.name}</p>
                        </div>)}
                    </div>)}
                </div>
    } else {
            return  <div className="testimonials-container-mobile">
                <h1 className='h1-nuvotek'>Testimoniale</h1>
                <Slider {...sliderSettings}>
                        {testimonials.map(testiomnial => <div className='testimonial-single-mobile' key={'testimonial-' + testiomnial.name}> 
                            <p className='testimonial-text-par'>{testiomnial.text}</p>
                            <p className='testimonial-name-par'>{testiomnial.name}</p>
                        </div>)}
                </Slider>
            </div>
    }
  }
  
  export default TestimonialsSection;
  
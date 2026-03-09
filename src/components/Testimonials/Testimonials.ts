export interface ITestimonial {
    text: string;
    name: string;
    title?: string;
}

const TESTIMONIALS: ITestimonial[] = [
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
        },
                {
            text: "testimonial_text_7",
            name: "Mihai",
            title: "testimonial_title_7"
        },
                {
            text: "testimonial_text_8",
            name: "Maria",
            title: "testimonial_title_8"
        },
        {
            text: "testimonial_text_9",
            name: "Sofia",
            title: "testimonial_title_9"
        }
];

export default TESTIMONIALS;
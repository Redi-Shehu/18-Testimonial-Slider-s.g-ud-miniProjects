const testimonials = [
  {
    name: "Loren P.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "I love my Samsung Galaxy! The camera is amazing, battery lasts all day, and it seamlessly connects with my other devices!",
  },
  {
    name: "Alex S.",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "I switched to the Samsung Galaxy, and it’s been a game-changer! The camera takes stunning photos, and the battery lasts all day.",
  },
  {
    name: "Viktoria M.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "I love the sleek design and how easy it is to use. Plus, the performance is lightning-fast! It’s the perfect phone for my busy lifestyle.",
  },
];
console.log(testimonials);

const imgDOM = document.querySelector("img");
const textDOM = document.querySelector(".text");
const usernameDOM = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, img, testimonial } = testimonials[index];

  imgDOM.src = img;
  textDOM.textContent = testimonial;
  usernameDOM.textContent = name;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }
}

setInterval(() => {
  updateTestimonial();
}, 6000);

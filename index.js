document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const items = document.querySelectorAll('.slider-item');
    let currentIndex = 0;
    const transitionTime = 500;
    const delayTime = 2000; 

    const updateSlider = () => {
        const itemWidth = items[0].offsetWidth + 16;
        const transformValue = -currentIndex * itemWidth;
        slider.style.transform = `translateX(${transformValue}px)`;
    };

    const startAutoSlide = () => {
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % items.length; 
            updateSlider();
            startAutoSlide(); 
        }, transitionTime + delayTime); 
    };

   
    updateSlider();
    startAutoSlide();


    window.addEventListener('resize', updateSlider);
});


class SliderCarousel {
    constructor(main, wrap, next, prev){
        this.main = document.querySelector(main),
        this.wrap = document.querySelector(wrap),
        this.slides = document.querySelector(wrap).children,
        this.next = document.querySelector(next),
        this.prev = document.querySelector(prev), 
        this.slideToShow = 3,
        this.options = {
            position: 0,
            infinity: true,
            widthSlide: Math.floor( 100 / this.slideToShow),
            maxPosition: this.slides.length - this.slideToShow 
        },
      this.responsive = [{
          breakpoint: 1024,
          slidesToShow: 3
      },
      {
          breakpoint: 768,
          slidesToShow: 2
      },
      {
          breakpoint: 576,
          slidesToShow: 1
      }],
      this.infinity = false,
        this.position = 0
    }
        
    
    init (){
        this.addGloClass();
        this.addStyle();
        if(this.responsive){
            this.responseInit();
        }
        if(this.prev && this.next){
            this.controlSlider()
        }
       
    }


    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for(const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle(){
        let style = document.getElementById('sliderCarousel-style');
        if (!style){
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        
        style.textContent = `
            .glo-slider{
                overflow: hidden !important;
            }
            .glo-slider__wrap{
                display: flex;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-slider__item{
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
        `;
        document.head.appendChild(style);

    }
    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    
    
    responseInit() {
        const slidesToShowDefault = this.slideToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
    
            if(widthWindow < maxResponse){
                
                for( let i = 0; i < allResponse.length; i++){
                    if (widthWindow < allResponse[i]){
                        this.slideToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slideToShow);
                        this.addStyle();
                    } 
                }
            }else {
                        this.slideToShow = slidesToShowDefault;
                        this.options.widthSlide = Math.floor(100 / this.slideToShow);
                        this.addStyle();
            }
        };

        window.addEventListener('resize', checkResponse);
    
    }

    prevSlider(){
        if(this.options.infinity || this.options.position > 0){
        --this.options.position;
            if(window.screen.width < 768){
                this.slideToShow = 2;
                this.options.maxPosition = this.slides.length -  this.slideToShow;
            }
        if (window.screen.width < 576){
                this.slideToShow = 1;
                this.options.maxPosition = this.slides.length -  this.slideToShow;
            }
           
            if (this.options.position < 0){
              this.options.position = this.options.maxPosition;
            }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
            
            if(this.options.infinity || this.options.position <= this.options.maxPosition){
                ++this.options.position;
                if(window.screen.width < 768){
                    this.slideToShow = 2;
                    this.options.maxPosition = this.slides.length -  this.slideToShow;
                }
                if (window.screen.width < 576){
                    this.slideToShow = 1;
                    this.options.maxPosition = this.slides.length -  this.slideToShow;
                }
                
            if(this.options.position > this.options.maxPosition){
                
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }


}

const slider = new SliderCarousel(
        '.formula-slider-wrap',
        '.formula-slider',
        '#formula-arrow_right',
        '#formula-arrow_left'
    
);

slider.init();

const sliderPartner = new SliderCarousel(
    '.wrapper',
    '.partners-slider',
    '#partners-arrow_right',
    '#partners-arrow_left'

);

sliderPartner.init();

export default SliderCarousel;
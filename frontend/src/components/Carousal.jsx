
// src/components/bootstrap-carousel.component.js
import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class BootstrapCarouselComponent extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row">
<div className="col-sm-12">

</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src="https://static.businessworld.in/article/article_extra_large_image/1530602768_Q2MmBQ_Isl-Footbal-League-Mumbai-470.jpg"
alt="First slide"
/>
<Carousel.Caption>


</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76kAPFAzWPjNhYNw6E-ki8cjrtlO-I_jTnQ&usqp=CAU"
alt="Second slide"
/>
<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FTfeK7SFq6h-HAaVhMtrgtQhzHpx4js87qiEefDg4gQjrAb1lfdqxuVfLvs6nMZgj_c&usqp=CAU"
alt="Third slide"
/>
<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default BootstrapCarouselComponent;

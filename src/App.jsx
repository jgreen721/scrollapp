import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const footerRef = useRef();
  const headerRef = useRef();
  const sectionRef = useRef();
  const sectionTwoRef = useRef();
  const imgRef = useRef();


  useEffect(()=>{
      showObserver.observe(footerRef.current);
      dropObserver.observe(headerRef.current);
      imgObserver.observe(imgRef.current);
      sectionObserver.observe(sectionRef.current);
      sectionTwoObserver.observe(sectionTwoRef.current);
  },[])
  // const scrollEl = (e)=>{
  //   console.log(e)

  // }

  const showFooter=(e)=>{
    console.log(e[0].isIntersecting)
    if(e[0].isIntersecting){
      console.log("Footer is showing!!!")
      e[0].target.querySelector(".footer-links").classList.add("show-footer")
      e[0].target.querySelector(".footer-p").style.opacity = 1;
    }
    else{
      console.log("DONT FIRE")
      e[0].target.querySelector(".footer-p").style.opacity = 0;
      e[0].target.querySelector(".footer-links").classList.remove("show-footer")


    }
  }

  const showHeader=(e)=>{
    console.log(e[0].isIntersecting)
    if(e[0].isIntersecting){
      console.log("HEADer is showing!!!")
      e[0].target.querySelector("h1").classList.add("show-header")
      e[0].target.querySelector("h5").classList.add("show-header")
    }
    else{
      console.log("DONT FIRE")
      e[0].target.querySelector("h5").classList.remove("show-header")
      e[0].target.querySelector("h1").classList.remove("show-header")


    }
  }


  const showImg=(e)=>{
    console.log(e[0].isIntersecting)
    if(e[0].isIntersecting){
      console.log("HEADer is showing!!!")
      setTimeout(()=>{
      e[0].target.style.opacity =1;
      },2500);
    }
    else{
      console.log("DONT FIRE")
      e[0].target.style.opacity =0;



    }
  }

  const showSectionTwo=(e)=>{
    console.log(e[0].isIntersecting)
    if(e[0].isIntersecting){
      console.log("HEADer is showing!!!")
      setTimeout(()=>{
      e[0].target.style.opacity =1;
      },500);
    }
    else{
      console.log("DONT FIRE")
      e[0].target.style.opacity =0;



    }
  }


  const showSection=(e)=>{
    console.log(e[0].isIntersecting)
    if(e[0].isIntersecting){
      console.log("HEADer is showing!!!")
      e[0].target.querySelector("p").classList.add('show-section');
    }
    else{
      console.log("DONT FIRE")
      e[0].target.querySelector("p").classList.remove('show-section');



    }
  }

  const showObserver = new IntersectionObserver(showFooter)
  const dropObserver = new IntersectionObserver(showHeader)
  const imgObserver = new IntersectionObserver(showImg)
  const sectionObserver = new IntersectionObserver(showSection)
  const sectionTwoObserver = new IntersectionObserver(showSectionTwo)


  return (
    <div className="app">
      <header ref={headerRef} className="header">
        <h1>~ Justins React App ~ </h1>
        <h5>Scroll n See Page Els</h5>
      </header>
      <section ref={sectionRef}>
 <p className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad totam repudiandae aliquam? Assumenda suscipit magnam laboriosam deserunt exercitationem in possimus incidunt maxime eaque ut nisi debitis tempore amet a ab inventore molestias, excepturi expedita, voluptate esse, id recusandae sint hic harum! Ad facilis distinctio, iusto enim quod aliquid ducimus, deleniti tempore vel libero quaerat nobis temporibus sequi eveniet! Facere id ex temporibus quis odit? Libero laudantium temporibus ut voluptas cupiditate at sit qui? Quas eos tempore doloribus minima? Fugiat impedit quae odio sed tenetur perferendis, nulla libero tempora quo illo, iure numquam praesentium, facilis sit animi rem repellendus? Omnis amet distinctio non iure, nulla autem eius nam est, corrupti doloremque maxime, laboriosam eligendi optio. Explicabo doloribus reprehenderit sit, aperiam vero asperiores beatae exercitationem eius cum minima fugit deleniti blanditiis voluptas, dolor corrupti aliquid saepe iure porro magni atque eos voluptatum cumque! Pariatur natus dicta culpa veritatis laborum modi non ducimus dolor numquam, reiciendis quam voluptatum, amet ipsa suscipit magnam aliquid dolore officiis nesciunt? Iste, ut at! Iste maiores quidem explicabo repellendus ea consequatur aperiam, saepe quaerat voluptatibus cumque aut nihil soluta reprehenderit temporibus quo repudiandae voluptatem labore ipsum, quisquam eius nam magni! Sequi corporis veniam maiores distinctio tempore, officiis ea eaque corrupti blanditiis perspiciatis nihil, similique doloribus possimus rerum enim architecto placeat dolore consequatur quia aspernatur ullam vel laborum. Autem, facere non inventore enim omnis provident magnam sapiente quod debitis vel! Vel sunt nihil quas illo suscipit accusantium, voluptates modi architecto ipsam, ad dolorem facere eius porro, fuga ex?</p>
      </section>
  

      <img ref={imgRef} className="img" src="https://unsplash.it/400/300" alt="" />

<p ref={sectionTwoRef} className="blurb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste, soluta possimus architecto reiciendis qui recusandae ab non id distinctio ex perferendis fugit modi similique nam, deserunt accusantium sequi quaerat, saepe ea inventore nobis laborum. Sed minima quos at, eveniet iusto iste amet eos reiciendis. Magni ducimus, dignissimos facere autem mollitia laboriosam porro voluptate sequi harum quia aut optio deserunt sapiente doloremque cum, eaque id vero soluta a sed odit? Temporibus blanditiis quas sint facere nostrum, hic obcaecati atque eligendi officiis voluptate doloribus in, corporis quisquam asperiores corrupti. Necessitatibus et nesciunt soluta minus ab quae neque repellendus quam placeat! Debitis neque aliquam modi voluptatum velit libero magnam ad voluptate commodi aliquid eaque fuga doloribus, vitae qui natus officia perspiciatis in impedit explicabo dignissimos? Enim voluptate veniam iste numquam voluptates libero officia cum at officiis aperiam. Labore accusantium magnam libero, assumenda quia natus! Beatae tempora ipsam iusto asperiores! Repudiandae cum labore placeat nesciunt! Eius, perspiciatis similique.</p>
      <footer ref={footerRef} className="footer">
        <strong className="footer-p">Footer&copy;</strong>
        <ul className="footer-links">
          <li className="footer-item">Instagram</li>
          <li className="footer-item">Twitter</li>
          <li className="footer-item">Facebook</li>
        </ul>
      </footer>
    </div>
  )
}

export default App

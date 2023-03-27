<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-with,initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="styles/main.css" />
    <title>Hawa Abdallah's Portfolio</title>
    <link rel="icon" type="icon" href="favicon.ico" />
    <script
      src="https://kit.fontawesome.com/685a195d60.js"
      crossorigin="anonymous"
    ></script>
    
  </head>
  <body>
    <!--Navigation bar-->
    <header>
      <nav class="nav-bar">
        <div class="logo">
          <!--<a>
            <p>Hawa</p>
          </a>-->
        </div>
        <div class="nav-element">
          <ul class="nav-bar-list">
            <li class="list"><a href="#about-me">About me</a></li>
            <li class="list"><a href="#projects">Projects</a></li>
            <li class="list"><a href="#contacts">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <!--Page Wrapper-->
    <div class="page-wrapper">
      <div class="container">
        <section class="intro-block">
          <div class="myIntro">
            <h1 class="h1">Hi, my name is Hawa Abdallah </h1>
           <p class="p1">
              I am a Full-Stack Developer and, I am currently part of the amazing Daly Cohort enrolled in the brilliant,  <br /> <strong> 'BlackCodher Bootcamp'.</strong>
            </p>
          </div>
        </section>
        <!--<div class="btn">
          <button>Hire me</button>
        </div>-->
        <section class="about-me">
          <h3 class="h3" id="about-me">About me</h3>
          <div class="about-me-paragraph">
            <p class="p2">
              Equipped with transferable, global market experience in the Tech-focussed
              Public Relations field in 2022 I decided to take the necessary steps
              to transition into a successful career as a Full-Stack Developer. 
              I'm a quick learner and adapatable problem solver. 
              I'm a self starter, and began teaching myself how to code until I decided
              to enroll into a bootcamp for the necessary push forward in my career trajectory.
              I am working to develop my skills in the field of Software Egineering
              and make my dreams a reality. 
              I successfully completed my Undergraduate Degree in English 
              and American Studies at the University of Nottingham.
              In my free time, I like to decompress by watching movies on NetFlix, working out,
              baking for family and friends, volunteering and creating art.

            </p>
            <img
              class="profile-img"
              src="images/myAvatar.jpg"
              alt="Hawa"
              width="120"
              height="200"
            />
          </div>
        </section>
        <h4 class="h4" id="projects">My Projects</h4>
        <!-- TIME LINE IMPLEMENTATION-->
        <div class="timeline">
          <ul class="projects">
            <li>
              <span>09th October 2022</span>
              <div class="content">
                <h3>Create portfolio</h3>
                <p>It has been accomplished with the use of HTML5 and CSS3.</p>
              </div>
            </li>
            <li>
              <span>20th November 2022</span>
              <div class="content">
                <h3>JavaScript group project</h3>
                <p>
                  It is a group-based project using JavaScript using agile
                  methodology.
                </p>
              </div>
            </li>
            <li>
              <span>08 January 2023</span>
              <div class="content">
                <h3>React project</h3>
                <p>It is a project built using REACT.js technology.</p>
              </div>
            </li>
            <li>
              <span>12th February 2023</span>
              <div class="content">
                <h3>Node project</h3>
                <p>It is a project built using Node JS</p>
              </div>
            </li>
          </ul>
        </div>
        <!--PREVIOUS PROJECT USING GRID FORMAT-->
        <div class="prev-title"><h>Projects I have Built</h></div>
        <div class="previous-project">
          <div class="box a">
            <a href="">
              <h6>Book Management System</h6>
              <p class="p6">
                This is a single-page application using JavaScript, React.JS,
                and Bootstrap for the client side. and created a REST FULL API
                with Codeigniter 3, a PHP framework for the server side.
              </p>
            </a>
          </div>
          <div class="box b">
            <a href="">
              <h7>Food Blogging mobile app</h7>
              <p class="p7">
                A food blogging app built with Flutter and powered by Sqlite on
                the backend. of the application.
              </p>
            </a>
          </div>
          <div class="box c">
            <a href="">
              <h8>Virtual Card</h8>
              <p class="p8">
                An application using React.js that simply has information about
                a person.
              </p>
            </a>
          </div>
          <div class="box d">
            <a href="">
              <h9>Virtual Field Tour</h9>
              <p class="p9">A virtual field tour using React 360 degree.</p>
            </a>
          </div>
          <div class="box e">
            <a href="">
              <h10>Food Blog</h10>
              <p class="p10">A food website using HTML5 and CSS3.</p>
            </a>
          </div>
          <div class="box f">
            <a href="">
              <h11>Database System</h11>
              <p class="p11">
                A database system for simulated hospitals using Oracle SQL.
              </p>
            </a>
          </div>
        </div>
        <!-- Inspiration -->
        <div><h class="h12"> One of the videos that inspired me </h></div>
        <div class="myvideo">
          <p class="p12">
            This is a video I watched that really inspired me when I was
            on the fence about becoming a Software Egineer despite my lack
            of experience in the field and qualifications.
            Her journey she speaks on in the video was motivational 
            and has made me want to do a similar
            retrospective lookback on my journey. 
            Afterall you have to enjoy the journey and embrace the destination!
            I too would like to motivate people who want to start a career 
            in Software Egineering.
          </p>
          <div class="youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=V7Mt6Z30eaY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!--CONTACT ME -->
        <section class="block4-styling" id="contacts">
          <div class="row">
            <h5>Get in touch with me</h5>
          </div>
          <div class="row">
            <h4 style="text-align: center">I'd love to hear from you!</h4>
          </div>
          <div class="row input-container">
            <div class="col-xs-12">
              <div class="styled-input wide">
                <input type="text" required />
                <label>Name</label>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="styled-input">
                <input type="text" required />
                <label>Email</label>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="styled-input" style="float: right">
                <input type="text" required />
                <label>Phone Number</label>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="styled-input wide">
                <textarea required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="btn-lrg submit-btn">Send Message</div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!--Footer-->
    <footer class="footer">
      <div class="content">
        <h6 class="h6">
            “We will always have STEM with us. 
            Some things will drop out of the 
            public eye and will go away, 
            but there will always be science, 
            engineering, and technology.” <br />
          - Katherine Johnson.
        </h6>
        <ul class="social-media">
          <li class="social-media">
            <a
              href="https://github.com/Hawa-A"
              ><i class="fab fa-github"></i
            ></a>
          </li>
          <li class="social-media">
            <a
              href="https://uk.linkedin.com/in/hawa-abdallah"
              ><i class="fab fa-linkedin"></i
            ></a>
          </li>
        </ul>
        <div class="bottom-notes">
          <p>copyright &copy;2022</p>
        </div>
      </div>
    </footer>
  </body>
</html>

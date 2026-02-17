/*
 * ALEX HENIN PORTFOLIO - MAIN JS
 * Contains: Data, Hash Router, Carousel Logic, Mobile Menu, Table of Contents
 */

/* --- 1. DATA STORE --- */
const project_1_title = "Reusable Rocket Ignitor";
const project_2_title = "Spiking Neural Network Snake";
const project_3_title = "NFC Bracelet";
const project_4_title = "Electric Car Towing System";
const project_5_title = "This Very Website!";
const containerPadding = "padding: 30px 15px;";

const DB = {
    projects: [
        {
            id: '1',
            title: project_1_title,
            images: ["images/projects/rocket/Injector_Assembly.png", "images/projects/rocket/Ignitor.gif"],
            desc: "Designed and produced prototype of rocket ignitor mount that both ensures reliable ignition and reusability.",
            content: `
                <section class="detail-section" id="overview">
                    <h2>OVERVIEW</h2>
                    <p>
                    Most small-scale liquid-fueled rockets initially start combustion in the engine via an e-match, a small amount of combustible material that ignites when an electric current is passed through it. This method, and the way the e-match is mounted, is typically one-time use. I devised a mount to:
                    </p>
                    
                    <ol style="margin-left: 4vh;">
                        <li>Reliably mount the e-match within the combustion chamber.</li>
                        <li>Reliably center the e-match within the combustion chamber.</li>
                        <li>Reliably eject the e-match at fire time.</li>
                        <li>Make this mounting system reusable.</li>
                    </ol>
                </section>
                <section class="detail-section" id="design">
                    <h2>DESIGN</h2>
                    <p>
                    We use an LR-101 engine, a small rocket engine previously used for attitude control on the early NASA Atlas rockets. Previous ignitor mount designs were made of thin sheet metal and mounted on the outside edge of the bell nozzle with a long threaded metal rod to hold the e-match inside the combustion chamber, similar to the ignitor assy below.
                    <img src="images/projects/rocket/images-4.jpeg" alt="Rocket engine e-match mount diagram" style="max-width: 40vh; height: auto;">
                    The force exerted by combustion is powerful enough to break any mounting means by bending the metal. Consequently, both the thin threaded rod and the sheet metal holding the e-match must be remade for each hot fire or launch. Besides being one-time use, it is not good practice to rely on something that works only if it fails. If the metal were to somehow withstand this force—even for a moment longer than intended—it could cause damage to the engine. The best mounting solution is one that reliably exits the engine whether it breaks or not.
                    <br> <br>
                    Another problem was that if the threaded rod was bent during transportation, it could scrape against the side or be askew within the engine, possibly hindering ignition or damaging the internals of the engine. The initial design was a three-pronged system that attached by pushing against the walls of the combustion chamber. These three prongs expand against the walls of the combustion chamber but also fold in, meaning they need to be rotationally stiff.
                    <br> <br>
                    The first iteration attempted to convert rotation into linear motion so a cheap spring could be used. A cam was attached where the prongs rotate to push down a spring-loaded plate. However, this design was scrapped for several reasons:
                    
                    <ul style="margin-left: 4vh;">
                        <li><strong>Manufacturability:</strong> The assembly would likely have to be 3D printed, and the steep overhangs made this impossible without support material that could not be removed.</li>
                        <li><strong>Replaceability:</strong> We launch at FAR, a desert in the middle of nowhere. Parts must be easy to replace and assemble; springs are neither.</li>
                        <li><strong>Size:</strong> With this sliding plate, the diameter is just simply too big to fit in the engine and function how its meant to.</li>
                    </ul>
                    <!-- <br> <br> -->
                    <img src="images/projects/rocket/three_pronged_ignitor.png" alt="Rocket engine e-match mount diagram" style="max-width: 50vh; height: auto;">
                    <br> <br>The next design solved these problems. The parts can be 3D printed in one pass with no overhangs or supports. They achieve rotational stiffness by using inexpensive rubber bands. This design functions regardless of whether it fails:
                    
                    <ol style="margin-left: 4vh;">
                        <li>If it breaks, it still reliably ignites the engine and falls out without causing damage.</li>
                        <li>If it remains intact, it still reliably ignites the engine and falls out without causing damage.</li>
                    </ol>
                    The three-prong design makes the ignitor mount self-corrects to be dead center of the engine.
                    </p>
                </section>
                <section class="detail-section" id="build">
                    <h2>BUILD</h2>
                    <p>This will be built in the coming weeks before our static fire/launch. In a good way, there's not much to say about how building this goes. Since manufacturability was a priority from the beginning, the build will go without a hitch. Besides the 3D-printed parts, only three cheap rubber bands and bolts are required. The build process consists entirely of just tightening three screws and attaching rubber bands through the eye hooks.</p>
                </section>
            `
        },
        /*{
            id: '2',
            title: "Spiking Neural Network Snake",
            images: ["images/hero/Hero_2.jpeg", "images/hero/Hero_4.jpeg"],
            desc: "Another project description placeholder.",
            content: `<section class="detail-section" id="overview"><h2>Overview</h2><p>Project 2 details...</p></section>`
        },*/
        {
            id: '3',
            title: "NFC Bracelet",
            images: ["images/projects/nfc/IMG_5632.JPG", "images/projects/nfc/bracelet_slide.png", "images/projects/nfc/IMG_0316.JPG", "images/projects/nfc/NFC_site.png"],
            desc: "Worked with manufacturers to produce NFC-enabled bracelets leading to a custom website sharing stories of rescued children.",
            content: `
                <section class="detail-section" id="overview">
                    <h2>OVERVIEW</h2>
                    <p>
                    I was part of a 100% student non-profit called Kids Helping Kids. As part of a group of only 10 kids, we raised +$80,000 of net profit for freeing children from human trafficking in India. I was our CTO and Head of our Call to Give initiative. I had the idea to make bracelets for people who stood to join our cause that had designs of the organization we were supporting and using NFC, opened a custom built website that shared stories of girls freed from human trafficking.
                    </p>
                </section>
                <section class="detail-section" id="design">
                    <h2>DESIGN</h2>
                    <p>
                    First was the design of the website. At that time I only knew Java and barely Python. Besides the fact that a website can not be built on those languages, I was dealing with a knowledge and time constraint, so the easier option would have to be the one we went with. I went with Google sites since the url the site would be hosted on would not matter as the means people would access the site was just tapping the bracelet to their phone, and also for the ease of the drag and drop nature of building the site.
                    <br> <br>
                    Second was the design of the bracelet. I used Adobe Illustrator to make mockups of the bracelet and printed them on paper to make “mockups” I could wear to see how they looked. This part was relatively easy. After that was finished, I then started looking for means of production.
                    </p>
                </section>
                <section class="detail-section" id="production">
                    <h2>PRODUCTION</h2>
                    <p>
                    I initially tried to look locally to carry this out but couldn't find anyone capable of making the bracelets. The plan in the beginning was to get the bracelets made and then sew in the NFC tags. Eventually, through Alibaba, I found a manufacturer in China that was capable of printing the bracelets and sewing the NFC tag and bracelet together in one go. I further altered the design and then sent the files, and then waited for shipping.
                    <br> <br>
                    <p>
                    Once the bracelets arrived, then came the problem of programming the site onto them. NFC tags are little copper coils with a small chip in the middle. Whatever device wanting to read the chip simultaneously powers this coil and reads the signal the chips send back through the coil. This means on the side of the chip, reading and writing the chips requires 0 power so it can indefinitely function without needing to house a battery. Usually you need to buy another expensive device to write onto these chips, but a small group of people figured out that the same device inside every phone used to read these chips could also use this device to write onto the chips. This was also better since we had 500 bracelets to write so this enabled other team members to simply download an app to their phone and program these chips. So I gathered the whole team and in one afternoon we churned through programming all the bracelets.
                    </p>
                </section>
                <section class="detail-section" id="conclusion">
                    <h2>CONCLUSION</h2>
                    <p>
                    The bracelets were a huge success. People loved having a constant reminder of the difference they made in children's lives. We were able to have enough to give a bracelet to everyone who stood at our Call to Give and have extra to give to supporting members (the band who played that night, crew members, student volunteers, etc). It was really awesome to see the positive impact a simple piece of technology can have on a human-first cause.
                    </p>
                </section>
            `
        },
        {
            id: '4',
            title: "Electric Car Towing System",
            images: ["images/projects/electric-car/full_hub.png", "images/projects/electric-car/Head_on.png"],
            desc: "Wheel hub adapter that enables towing of electric cars eliminating the inconvenient or sometimes impossible need of a flatbed truck for towing.",
            content: `
                <section class="detail-section" id="overview">
                    <h2>OVERVIEW</h2>
                    <p>
                    Electric cars cannot be towed. If your electric car fails for any reason, a dead battery or otherwise, the wheels lock up and cannot freely rotate like conventional gas cars. Because of this a uncommon, huge, flatbed truck must be used to move it. The wait time for these can be hours, and if your car is stuck in a confined space (i.e. street parking or inside a parking garage), it may not even be possible to get it out. I designed an easy to mount low-profile wheel hub that bolts onto the already existing wheel studs and allows the wheels to freely spin so that any traditional means of towing a car can be used.
                    </p>
                </section>
                <section class="detail-section" id="design">
                    <h2>DESIGN</h2>
                    <h3>Problem</h3>
                    <p>
                    Electric motors function by rotating an electric field around an axle with magnets. When the axle spins from external means, the magnets and the electric field resist this motion and generate electricity. Electric generators use this; in most cases electric motors and generators are indistinguishable. This is useful for electric cars since they can recapture energy into the battery pack, but this means that the wheels cannot freely spin under no current. Due to this, if you have any problem with an electric car, whether it be a dead battery or otherwise, it cannot be towed like regular cars. A flatbed truck is needed to pull the entire car or truck into the bed and transport it to where it needs to be. These trucks are much less common than normal towing trucks, which means waiting time on the side of the road can be hours. They're also much larger, which means if your car is dead in an inconvenient or confined space, your car literally cannot be towed out. In these situations your car is mounted atop furniture style dollies and rolled to where it can be accessed, making an already tiresome process even more so.
                    <br><br>
                    <h3>Solution</h3>
                    The problem lies in the inability to freely rotate the wheels. The solution to this completely bypasses the stuck axle. By intentionally locking up the wheels with the brakes and mounting a freely rotating wheel hub to which the car wheels attach to, the wheels can freely spin.<br><br> Initially the idea was to have a hub with a pre-installed rotating wheel that could be attached to the wheel hub. This doesn't work/could be better for several reasons:
                    <ol style="margin-left: 4vh;">
                        <li> <strong>Width constraints: </strong> The clearance between where the hub attaches and the freely rotating wheel needs enough room for tools to be able to fit in and attach the bolts to the wheel hub. At the added width needed to do this (an additional 5 inches on both sides), the rear wheelbase on any car would exceed that of freeway or street lanes (the total rear wheel base length would be 95in+(2*in)=105in, nearly the standard 120 inch wide freeway and street lane)
                        <li> <strong>Transportability: </strong>At a total volume of nearly 1800 cubic inches for each hub, this would exceed any space a tow truck would be able to reasonably give up to carry, much less what a person owning an electric car could fit in their trunk if they wanted to be safe.
                    </ol>
                    <!-- <img src="images/projects/electric-car/ash-baby.gif" alt="Rocket engine e-match mount diagram" style="max-width: 40vh; height: auto;"> -->
                    <img src="images/projects/electric-car/whole_assembly_previous.png" alt="Rocket engine e-match mount diagram" style="max-width: 60vh; height: auto;">
                    <br><br>The second iteration of this had much more promise. To rectify the problem of the hub being too wide, the hub is split into two different parts. The first part mounts to the pre-existing wheel studs and also holds the bearing. The mounting section hub is now completely open so that it is very easy to mount. Once this is mounted, then the second, freely rotating part of the hub is attached to this. Now the wheel can be attached to these studs. This version now only adds a mere 1.25in*2=2.5in inches to the wheelbase on both sides, and now the wheels can freely rotate. This solution has the following benefits:
                    <ol style="margin-left: 4vh;">
                        <li> <strong>No spare wheel: </strong> No spare wheel needs to be transported. This solution utilizes the already existing car wheel
                        <li> <strong>Ease of transport: </strong>At a total volume of 87 cubic inches per hub, now any tow truck can now easily give up the needed space for this solution.
                        <li> <strong>Manufacturing: </strong>The first version of this part would have had to be CNC machined or use some other costly method of production. This version is made entirely out of 0.3inch thick steel (or aluminum) which can be easily water or laser cut
                    </ol>
                    <img src="images/projects/electric-car/gifgit (2).gif" alt="Rocket engine e-match mount diagram" style="max-width: 40vh; height: auto;">
                    <br><br>
                    The total added width to the wheel base now would be a mere 2.5in, well within freeway lanes or city streets. Installing these wheel hubs are as easy as changing a spare tire, and much less tiresome and feasible than needing a flatbed truck to transport your car.
                    </p>
                </section>
            `
        },
        {
            id: '5',
            title: "This Website!",
            images: ["images/projects/website/Website_Thumbnail.png"],
            desc: "This website! This is a single page application that uses JavaScript to load all pages and their respective elements into a single page for responsiveness and fast loading.",
            content: `
                <section class="detail-section" id="overview">
                    <h2>OVERVIEW</h2>
                    <p>
                    I've found the only way to learn a skill and be actually useful in it is by making a personal project from scratch in it. I wanted to learn HTML and CSS so I made the project I learned to do so on is the website you're on right now! I also got to put my JavaScript skills to good use in making this a Single Page Application. A Single Page Application is a single static site in HTML that uses JavaScript to dynamically load all other pages. I also use JS for features like the image carousels and the pulsating website header. 
                </p>
                </section>
                <section class="detail-section" id="design">
                    <h2>DESIGN</h2>
                    <p>
                    I know JavaScript and Python pretty well. I feel that to write good code you need more besides just memorizing functions' names and how they work and actually learning how to “think” in code. The only way I found I was able to do this for JavaScript and Python was to make projects and scrape your knees on how much it fails. I wanted to learn HTML and CSS so I figured the website for my portfolio would be a great way to learn.
                    <br><br>
                    At first I made every page of the site its own HTML file. This meant that every page had its own content but referenced the same CSS file for styling and spacing. This was fun and definitely taught me a lot, but I was done with it pretty quick. While I was learning how websites are built I came across something called a Single Page Application.
                    <br><br>
                    A faster and more efficient option for hosting a site is to have a single static site that uses JS to load all other pages into the browser. It means a hardly noticeably longer initialization but means no waiting/loading times for all the other pages. Any efficiency gains are lost on such a small project like this but I figured it would be fun and a good way to challenge myself.
                    <br><br>
                    I was actually surprised at how simple it was to build. Instead of an eyesore for every page, a single index.html file is used and all other content are loaded in a single beautiful line:
                    
                    <pre><code>&lt;div id="app"&gt;&lt;/div&gt;</code></pre>
                    
                    Everything, whether it's features or the page loading, reference main.js. And that's it! This was a quick and easy project but I'm very proud of it. Along the way I learned a lot of smaller cool things like hooking up your project to a github which is very useful for pushing changes and then rolling back when it doesn't work (which I did quite a lot haha)
                </p>
                </section>
                <section class="detail-section" id="conclusion">
                    <h2>CONCLUSION</h2>
                    <p>
                    I learned a lot through this. I can now confidently say that I learned HTML, CSS, and GitHub. I'm now working on a new personal project I'm not ready to say much on, but suffice to say, the skills I learned through this passion project taught and reinforced a lot of skills which have been very helpful. (And one more time I just have to gush about GitHub. How is this just a taken for granted thing? What a cool thing that just works. It now totally makes sense how this one small tool helps companies of hundreds of people work on the same project. Github is definitely a staple of all the projects I do now.)
                    </p>
                </section>
            `
        }
    ],
    skills: [
        "CNC Machining", "3D Printing/Slicing", "Rapid Prototyping", "First Principles Engineering",
        "Python", "JavaScript", "HTML", "CSS", "Fusion 360", "Onshape", "Solidworks", "Blender", "3D Art", 
        "Photo Editing", "Vector Design", "Video Compositing", "Excel", "Teams"
    ]
};

/* --- 2. COMPONENT LOGIC --- */

class Carousel {
    constructor(containerId, images, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container || !images || !images.length) return;
        
        // Handle both string array and object array formats
        // String: "image.jpg" 
        // Object: { src: "image.jpg", yPos: "top" } or { src: "image.jpg", yPos: 30 }
        this.images = images.map(img => {
            if (typeof img === 'string') {
                return { src: img, yPos: 'center' };
            }
            return { 
                src: img.src, 
                yPos: img.yPos !== undefined ? img.yPos : 'center' 
            };
        });
        
        this.index = 0;
        
        // Render Structure
        this.container.innerHTML = `
            <button class="carousel-btn prev-btn"><img src="SVG/Left_Arrow.svg" alt="<"></button>
            <div class="carousel-track">
                ${this.images.map(img => {
                    const yPosition = this.getYPosition(img.yPos);
                    return `<img src="${img.src}" class="carousel-slide" loading="lazy" style="object-position: center ${yPosition};">`;
                }).join('')}
            </div>
            <button class="carousel-btn next-btn"><img src="SVG/Right_Arrow.svg" alt=">"></button>
        `;

        this.track = this.container.querySelector('.carousel-track');
        
        // Bind Events
        this.container.querySelector('.prev-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling issues
            this.move(-1);
        });
        this.container.querySelector('.next-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.move(1);
        });
        
        // Auto Play
        this.startTimer();
    }

    getYPosition(yPos) {
        // Handle different yPos formats:
        // - 'top': 0%
        // - 'center': 50% (default)
        // - 'bottom': 100%
        // - Number (0-100): percentage
        // - String with %: pass through
        
        if (yPos === 'top') return '0%';
        if (yPos === 'center') return '50%';
        if (yPos === 'bottom') return '100%';
        if (typeof yPos === 'number') return `${yPos}%`;
        return yPos; // Assume it's already formatted correctly
    }

    startTimer() {
        if(this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => this.move(1), 5000);
    }

    move(direction) {
        this.index = (this.index + direction + this.images.length) % this.images.length;
        this.track.style.transform = `translateX(-${this.index * 100}%)`;
        this.startTimer(); // Reset timer
    }
}

function generateTOC() {
    const sections = document.querySelectorAll('.detail-section');
    const container = document.getElementById('toc-links');
    if(!container || sections.length === 0) return;

    sections.forEach(sec => {
        const id = sec.id;
        const title = sec.querySelector('h2').innerText;
        const btn = document.createElement('button');
        btn.innerText = title;
        btn.onclick = () => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        container.appendChild(btn);
    });
}

/* --- 3. ROUTER & PAGES --- */

const Routes = {
    '': () => {
        // Home Page
        return `
            <section class="hero-section">
                <div class="carousel-container" id="home-carousel"></div>
                <div class="hero-text">
                    <h1>TOMORROW BUILT TODAY</h1>
                </div>
                <div class="brutal-block" style="border-left:0; border-right:0;">
                    <h2>ENGINEERING THE FUTURE</h2>
                    <p>Transforming ideas into reality through first principles engineering.</p>
                    <a href="#projects" class="btn">VIEW PROJECTS</a>
                </div>
            </section>
        `;
    },
    'about': () => `
        <div class="container" style="${containerPadding}">
            <h1>ABOUT</h1>
            <div class="brutal-block">
                <h2>MISSION</h2>
                <p>I believe we have a duty to influence the world around us for the better; otherwise, we are no more substantial than a chemical reaction—fascinating, but in the end insignificant. Ultimately, engineering is not only the most effective, but the only way we can positively affect change in this world. Therefore, the most advanced engineering endavours are the most important towards the betterment of humanity. It is for that reason I am deeply inspired and driven to work on the biggest engineering projects I possibly can.</p>
            </div>
            <div class="brutal-block">
                <h2>BACKGROUND</h2>
                <p>I am a passionate Aerospace Engineering undergraduate seeking opportunities with companies inspiring in mission and ambition. I have hands-on experience in fluid propulsion systems, CNC, manufacturing, and quality assurance. Looking to put extensive CAD/design skills and intuition to good use in companies working towards a brighter future.</p>
            </div>
        </div>
    `,
    'projects': () => `
        <div class="container" style="${containerPadding}">
            <h1>PROJECTS</h1>
            <div class="projects-grid">
                ${DB.projects.map(p => `
                    <a href="#project/${p.id}" class="project-card">
                        <h3>${p.title}</h3>
                        <img src="${p.images[0]}" alt="${p.title}">
                        <p>${p.desc}</p>
                    </a>
                `).join('')}
            </div>
        </div>
    `,
    'skills': () => `
        <div class="container" style="${containerPadding}">
            <h1>SKILLS</h1>
            <div class="skills-cloud">
                ${DB.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
    `,
    'resume': () => `
        <div class="container" style="${containerPadding}">
            <h1>RESUME</h1>
            <div class="pdf-container">
                <iframe src="Engineering Resume (Final).pdf" title="Resume"></iframe>
            </div>
        </div>
    `
};

function renderProject(id) {
    const p = DB.projects.find(x => x.id === id);
    if (!p) return `<div class="container"><h1>Project Not Found</h1><a href="#projects" class="btn">Back</a></div>`;
    
    return `
        <div class="container" style="${containerPadding}">
            <h1>${p.title}</h1>
            <a href="#projects" class="btn" style="margin-bottom:20px;">← Back</a>
            
            <div class="carousel-container" id="project-carousel-${id}"></div>
            
            <div class="project-detail-wrap">
                <div class="project-content">
                    ${p.content}
                </div>
                <aside class="project-toc">
                    <h3>${p.title.toUpperCase()}</h3>
                    <div id="toc-links"></div>
                </aside>
            </div>
        </div>
    `;
}

class AppRouter {
    constructor() {
        this.app = document.getElementById('app');
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.load());
        
        // Initial load
        this.load();
    }

    load() {
        // Get the hash without the '#' (e.g., 'about' or 'project/1')
        let hash = location.hash.slice(1);
        
        // Close mobile menu if open
        document.getElementById('mobileOverlay').classList.remove('active');
        document.documentElement.scrollTop = 0; // Reset scroll

        // 1. Check for Project Details
        if (hash.startsWith('project/')) {
            const id = hash.split('/')[1];
            this.app.innerHTML = renderProject(id);
            const p = DB.projects.find(x => x.id === id);
            if(p && p.images) {
                new Carousel(`project-carousel-${id}`, p.images);
                generateTOC();
            }
            return;
        }

        // 2. Standard Pages (default to Home if hash is empty)
        const renderFn = Routes[hash] || Routes[''];
        this.app.innerHTML = renderFn();

        // 3. Initialize Home Carousel if we are on home
        if (hash === '') {
            new Carousel('home-carousel', ["images/hero/Hero_1.PNG", "images/hero/Hero_2.JPG", { src:"images/hero/Hero_6.JPG", yPos: 20},{ src: "images/hero/Hero_3.JPG", yPos: 35}, "images/hero/Hero_5.jpg", "images/hero/Hero_4.jpg"]);
        }
    }
}

/* --- 4. INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    // Start Router
    new AppRouter();

    // Mobile Menu Logic
    const btn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('mobileOverlay');
    
    if(btn && overlay) {
        btn.addEventListener('click', () => {
            overlay.classList.toggle('active');
            btn.style.opacity = overlay.classList.contains('active') ? '0.5' : '1';
        });
    }
});

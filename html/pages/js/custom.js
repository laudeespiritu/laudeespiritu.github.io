// Back to Top function
document.querySelector('#back-to-top').addEventListener('click', scrollUp = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Intersection Observer
const navbar = document.querySelector('nav');
const sectionOne = document.querySelector('#section-home');

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Collection section observer
const sectionCollection = document.querySelector("#section-collection");
const sectionCollectionOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionCollectionsObserver = new IntersectionObserver(function(
    entries,
    sectionCollectionsObserver
){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.children[0].classList.add("animate__animated", "animate__slideInLeft");
        }
    });
}, sectionCollectionOptions);
sectionCollectionsObserver.observe(sectionCollection);

// Submissions section observer
const sectionSubmission = document.querySelector("#section-slider");
const sectionSubmissionOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionSubmissionObserver = new IntersectionObserver(function(
    entries,
    sectionSubmissionObserver
){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.children[0].classList.add("animate__animated", "animate__slideInLeft");
        }
    });
}, sectionSubmissionOptions);
sectionSubmissionObserver.observe(sectionSubmission);

// Blogs section observer
const sectionBlog = document.querySelector("#section-blog");
const sectionBlogOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionBlogObserver = new IntersectionObserver(function(
    entries,
    sectionBlogObserver
){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.children[0].classList.add("animate__animated", "animate__slideInLeft");
        }
    });
}, sectionBlogOptions);
sectionBlogObserver.observe(sectionBlog);

// Testimonials section observer
const sectionTestimonial = document.querySelector("#section-testimonial");
const sectionTestimonialOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionTestimonialObserver = new IntersectionObserver(function(
    entries,
    sectionTestimonialObserver
){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.children[0].classList.add("animate__animated", "animate__slideInLeft");
        }
    });
}, sectionTestimonialOptions);
sectionTestimonialObserver.observe(sectionTestimonial);

// Pricing section observer
const sectionPricing = document.querySelector("#section-pricing");
const sectionPricingOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionPricingObserver = new IntersectionObserver(function(
    entries,
    sectionPricingObserver
){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.children[0].classList.add("animate__animated", "animate__slideInLeft");
        }
    });
}, sectionPricingOptions);
sectionPricingObserver.observe(sectionPricing);

// Subscribe header observer
const subscribeCaption = document.querySelector(".subscribe-caption");
const subscribeEntry = document.querySelector(".subscribe-entry");
const subscribeOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const subscribeCaptionObserver = new IntersectionObserver(function(
    entries,
    subscribeCaptionObserver
){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__flipInX");
        }
    });
}, subscribeOptions);
subscribeCaptionObserver.observe(subscribeCaption);
const subscribeEntryObserver = new IntersectionObserver(function(
    entries,
    subscribeEntryObserver
) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__slideInDown");
        }
    });
}, subscribeOptions);
subscribeEntryObserver.observe(subscribeEntry);

// Tab Menu
const tabItems = document.querySelectorAll(".tab-btn");
tabItems.forEach(tabs => tabs.addEventListener("click", (e)=> {
    tabItems.forEach(item => item.parentElement.classList.remove("active")); // Remove "active" class on all list items
    showTab(e.currentTarget.getAttribute("data-tabindex") - 1); // Call showTab function to display tab
    e.currentTarget.parentElement.classList.add("active"); // Add "active" class on current target list element
}));

function showTab(index) {
    if (index < 0)
    index = 0;
    const tabs = document.querySelectorAll(".tab-body");
    for(x = 0; x < tabs.length; x++) {
        if (x === index) {
            tabs[x].style.display = "";
        } else {
            tabs[x].style.display = "none";
        }
    }
}
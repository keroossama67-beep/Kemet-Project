const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        alert(`شكراً لاختيارك ${productName}! سيتم توجيهك لصفحة الدفع قريباً.`);
    
    });
});


document.querySelector('.cta-btn').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#shop').offsetTop - 70,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
    }
const destinationLink = document.querySelector('a[href="destination.html"]');

if (destinationLink) {
    destinationLink.addEventListener('click', (e) => {
    
        console.log("تم الانتقال لصفحة الوجهات");
    });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;

        alert(`شكراً لتواصلك معنا يا ${name}! \nلقد استلمنا رسالتك على البريد: ${email} وسنقوم بالرد عليك في أقرب وقت.`);
        
        
        contactForm.reset();
    });

const observerOptions = {
    threshold: 0.4 
};

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.info-slide').forEach(slide => {
    slideObserver.observe(slide);


const observerOptions = {
    threshold: 0.4 
};

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('تم استلام رسالتك بنجاح! شكراً لتواصلك مع فريق كيميت.');
        contactForm.reset();
    });
}

const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('تمت إضافة المنتج إلى السلة!');
    });
    function sendReview() {
    const comment = document.getElementById('reviewText').value;
    const stars = document.querySelector('input[name="star"]:checked');

    if (!stars) {
        alert('من فضلك اختر تقييم النجوم أولاً!');
        return;
    }

    if (comment.trim() === "") {
        alert('من فضلك اكتب تعليقك قبل النشر.');
        return;
    }

    alert(`شكراً لك! تم استلام تقييمك (${stars.value} نجوم) بنجاح.`);
    document.getElementById('reviewText').value = "";
    
    document.querySelectorAll('input[name="star"]').forEach(input => input.checked = false);
}

const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const name = document.getElementById('userName').value;
        const date = document.getElementById('bookingDate').value;
        
        
        alert(`تم استلام طلبك بنجاح يا ${name}!\nموعد رحلتك هو: ${date}\nسنتواصل معك قريباً لتأكيد التفاصيل.`);
        
        
        bookingForm.reset();
    });
}
});




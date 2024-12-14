import './components/header.js';
import './components/hero.js';
import './components/footer.js';

const COMPONENTS = [
    'header',
    'hero',
    'commercial',
    'services',
    'features',
    'feedbacks',
    'projects',
    'blogs',
    'contact',
    'footer',
];

const PATHS = [
    'components/header.html',
    'components/hero.html',
    'components/commercial.html',
    'components/services.html',
    'components/features.html',
    'components/feedbacks.html',
    'components/projects.html',
    'components/blogs.html',
    'components/contact.html',
    'components/footer.html',
];

function loadComponents() {
    const fetchPromises = PATHS.map((path, index) => {
        return fetch(path)
            .then(response => response.text())
            .then(data => {
                document.getElementById(COMPONENTS[index]).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${COMPONENTS[index]}:`, error));
    });

    Promise.all(fetchPromises)
        .then(() => {
            console.log('All components loaded successfully');
        })
        .catch(error => {
            console.error('Error loading some components:', error);
        });
}

document.addEventListener("DOMContentLoaded", loadComponents);

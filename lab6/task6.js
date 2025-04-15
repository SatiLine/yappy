const links = document.querySelectorAll('a');

links.forEach(link => {
    const href = link.getAttribute('href'); 

    if (href.includes('://') && !href.startsWith('http://internal.com')) {
        link.style.color = 'orange';
    }
});
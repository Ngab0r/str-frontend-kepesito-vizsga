function changeOuterLinks() {
    const links = document.querySelectorAll('#link-list a');
    console.log(links);
    links.forEach(item => { if (item.innerHTML.includes('outer-link')) { item.setAttribute('target', '_blank'); item.innerHTML = `<strong>${item.innerHTML}</strong>` } });

    const navItem = document.querySelector('#link-list');
    navItem.style['display'] = 'flex';
    navItem.style['flex-direction'] = 'column';
    navItem.style['width'] = '30%';
    navItem.style['margin'] = '0 auto';
    navItem.style['border'] = '1px solid blue';
    navItem.style['padding'] = '16px';
}

(() => changeOuterLinks())();
export { changeOuterLinks };
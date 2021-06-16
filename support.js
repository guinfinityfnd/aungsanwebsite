const cookiesTag = document.querySelector('.cookies');

const toastAlert = () =>{
    const insideDiv = document.createElement('div');
    insideDiv.classList.add('insideText');
    const btn = document.createElement('button');
    btn.append('Accepted');
    insideDiv.append('We use cookies on this site.This cookies will not keep personal informations.',btn);
    cookiesTag.append(insideDiv);

    btn.addEventListener('click',()=>{
        localStorage.setItem('accepted','code1');
        insideDiv.style.bottom = `-${insideDiv.offsetHeight}px`;
    });
    setTimeout(()=>{
        insideDiv.style.bottom =`0px`;
    },200);  
}

const photosPhoneTag = document.querySelector('#photosPhone');
const photosAllLeaders = `
<img src="aungsan.jpg" alt="AungSan">
<xmp>General Aung San(February13-1915)-(July19-1947)
Wife -Daw Khin Kyi
Age - 32
Born - Myanmar</xmp>
<img src="ghandi.jpeg" alt="Gandhi">
<xmp>Mahatma Ghandi(October 2, 1869)-(January 30, 1948)
Age - 78
Born -India</xmp>
<img src="thomase.jpeg" alt="thomas">
<xmp>Thomas Alva Edison(February 11, 1847)-(October 18, 1931)
Age - 84
Born -United States</xmp>
<img src="abrahan.jpeg" alt="abrahan">
<xmp>Abraham Lincoln(February 12, 1809)-(April 15, 1865)
Age - 56
Born -United States</xmp>
<img src="oothant.jpeg" alt="oothant">
<xmp>Oo Thant(January 22, 1909)-(November 25, 1974)
Age - 65
Born -United States</xmp>
<img src="louis.jpg" alt="louis">
<xmp>Louis Braille( January 4, 1809)-(January 6, 1852)
Age - 43
Born -Franch</xmp>
<img src="sukyi.jpg" alt="sukyi">
<xmp>Daw Aung San Su Kyi(State Counsellor of Myanamr)(June 19, 1945)-
Current Age - 76
Born -Myanmar</xmp>
<img src="motherteresa.jpg" alt="Mother">
<xmp>Mother Teresa(August 26, 1910)-(September 5, 1997)
Age - 87
Born - North Macedonia</xmp>
<img src="mimi.jpg" alt="mimi">
<xmp>Daw Mi Mi Aung(1968)-
Current Age - 53
 Born - -United States</xmp>
`;

photosPhoneTag.innerHTML = photosAllLeaders;

const firstMenuListsTag = document.querySelector('#firstMenuLists');
const secondCrosssignTag = document.querySelector('#secondCrosssign');
const menusBarsTag = document.querySelector('.menusBars');
const androidPhoneScreen = ()=>{
    firstMenuListsTag.addEventListener('click',()=>{
        const classsExist = menusBarsTag.classList.contains('crossTransition','crossTransform'); 
        if (classsExist) {
            menusBarsTag.classList.remove('crossTransition','crossTransform');
        } else {            
            menusBarsTag.classList.add('transition','transform');
        }
        
            secondCrosssignTag.style.display = 'block';
            firstMenuListsTag.style.display = 'none';
            menusBarsTag.classList.add('transition','transform');

            secondCrosssignTag.addEventListener('click',()=>{
            secondCrosssignTag.style.display = 'none';
            firstMenuListsTag.style.display = 'block';
            const classExists = menusBarsTag.classList.contains('transition','transform');
            if (classExists) {
                menusBarsTag.classList.remove('transition','transform');
            }else{
                menusBarsTag.classList.add('crossTransition','crossTransform');                
            }
            menusBarsTag.classList.add('crossTransition','crossTransform'); 
        });        
    });

}; 

window.addEventListener('load',()=>{
    const accepted = localStorage.getItem('accepted','code1');
    if (accepted !== 'code1') {
        toastAlert();
    }
    androidPhoneScreen();
});

/* action button element linked with var see_project_btn */

const see_project_btn = document.querySelectorAll('.action-button');

/* register event on button */
[].forEach.call(see_project_btn,(ele)=>(
    ele.addEventListener('click',function(){
        /* modal container */
        const popup = document.createElement('div');
        popup.style.display = 'block';
        popup.classList.add('modal-container');
        ele.insertAdjacentElement('afterend', popup);
        /* document.appendChild(popup); */
    
        /* modal div */
        const modal = document.createElement('div');
        modal.style.display = 'block';
        modal.classList.add('modal-div');
        popup.appendChild(modal);
    
        /* modal content */
        const heading = document.createElement('h1');
        heading.innerHTML='Tonic';
        heading.style.display='block';
        heading.classList.add('project-title');
        modal.appendChild(heading); 

        /* canopy div section */
        const canopy_div = document.createElement('div');
        modal.appendChild(canopy_div);
        const canopy_sec =document.createElement('h2');
        canopy_sec.innerHTML = 'CANOPY';
        canopy_sec.classList.add('frame2')
        canopy_sec.style.display='block';
        canopy_div.appendChild(canopy_sec);

        
        const canopy_ul_sec = document.createElement('ul');
        const canopy_text1 = document.createElement('li');
        canopy_text1.innerHTML = "BackEndDev";
        canopy_ul_sec.classList.add('card-role');
        canopy_ul_sec.appendChild(canopy_text1);
        const canopy_text2 = document.createElement('li');
        canopy_text2.innerHTML = "2015";
        canopy_ul_sec.appendChild(canopy_text2);
        canopy_div.appendChild(canopy_ul_sec);

        /* image section starts here */
        const img = document.createElement('img');
        img.src = "./images/Snapshoot Portfolio.svg";
        img.classList.add('modal-img');
        modal.appendChild(img);

        /* paragraph section starts here */
        const paragraph = document.createElement('p');
        paragraph.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
        paragraph.classList.add('modal-paragraph');
        modal.appendChild(paragraph);

        /* languages section starts here */
        const tech_ul = document.createElement('ul');
        const technologies = ['html','css','javascript','github','ruby','Bootstrap'];
        for( let i=0; i<technologies.length; i++)
        {
            const li = document.createElement('li');
            li.innerHTML = technologies[i];
            tech_ul.appendChild(li);
        }
        modal.appendChild(tech_ul);

        /* button section starts here */
        const live_btn = document.createElement('button');
        live_btn.innerHTML="see live";
        modal.appendChild(live_btn);
        const source_btn = document.createElement('button');
        source_btn.innerHTML="see source";
        modal.appendChild(source_btn);

    
    })
    
))
   
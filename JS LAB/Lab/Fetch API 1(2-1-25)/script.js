fetch('userData.json')
    .then(response => response.json())
    .then(data=>{
        const res=document.getElementById('result');
        data.forEach(user => {
            const p=document.createElement('p');
            p.textContent=user.name;
            res.appendChild(p);
        });
    })
    .catch(error => console.error('Error:', error));
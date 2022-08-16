window.addEventListener('DOMContentLoaded', (event) => {
    const span = document.querySelectorAll(".rating"); 
    const ratingArr = Array.from(span);
    let value = null; 

    const questionContainer = document.querySelector('.question-container');
    const thanksContainer = document.querySelector('.thankyou-container');
    const feedback = document.querySelector('.rating-feedback');
    const error = document.querySelector('.error');
    const submitBtn = document.querySelector('.submit');

    ratingArr.forEach(btn => {
        btn.addEventListener('click', e => {
            ratingArr.forEach(btn => {
                if(btn.classList.contains('selected'))
                {
                    btn.classList.remove('selected');
                }
            })
            btn.classList.add('selected')
            value = e.target.innerHTML; 
        })
    })

    submitBtn.addEventListener('click', e => {
        if(value === null)
        {
            error.innerHTML = "Please select a value";
            return
        }
        else
        {
            questionContainer.classList.remove('on');
            thanksContainer.classList.add('on');
            feedback.innerHTML = `You selected ${value} out of 5`;
        }
    })

});





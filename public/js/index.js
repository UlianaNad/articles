console.log('work');


const run = async () => {
    const result = await axios.get('/articles');
    //console.log('get:', result.data);
    // 
    // console.log('post:', result2.data);

    let articles = result.data;

    const blockRender = () =>{
        let html = '';
    
        articles.forEach((article) => {
            html += `
            <div class="container">
                    <div class="block">
                        <h3>${article.title}</h3>
                        <div class="text">
                            ${article.text}
                        </div>
                    </div>
                    <div class="devider"></div>
                </div>
            `;
        });
        const wrapper = document.querySelector('.wrapper');

        wrapper.innerHTML = html;
    };
    blockRender();

    const input = document.querySelector('input');
    const text = document.querySelector('textarea');
    const button = document.querySelector('button');

    const addNewArticle = () =>{
            
        button.addEventListener('click', () =>{
            const inputValue = input.value;
            //console.log(inputValue);
            const textValue = text.value;
            //console.log(textValue);
    
            if(input && text){
                const result2 = async() =>{
                    await axios.post('/articles', {title:inputValue, text:textValue});
                } 
                result2();
            }
            blockRender(); 
        }); 
    };

    addNewArticle();

    
};
run();


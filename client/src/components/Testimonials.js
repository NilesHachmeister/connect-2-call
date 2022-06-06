import React from 'react';
import '../homepg.css';

const testStyle = {

    card: {
        position: 'sticky',
        paddingLeft: 20,
        paddingRight: 20,
        top: 0,
        paddingTop: ' calc(var(--index) * var(--card-top-offset))',
    },
    card__content: {
    boxShadow: '0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1)',
	background: 'rgb(255, 255, 255)',
	color: 'rgb(10, 5, 7)',
	borderRadius: '1em',
	overflow: 'hidden',
	display: 'grid',
	gridTemplateAreas: 'textimg',
	gridTemplateColumns: '1fr 1fr',
	gridTemplateRows: 'auto',
	alignItems: 'stretch',
        div:{
        gridArea:'text', 
        width: '80%',
        placeSelf: 'center',
        textAlign: 'left',
        display: 'grid',
        gap: '1em',
        placeItems: 'start',
        },
        figure: {
            gridArea: 'img',
	        overflow: 'hidden',
            img: {
                width: '100%',
	            height: '100%',
	            objectFitt: 'cover',
            },
        },
    },
}


const Testimonials = () => {
    return (

    < >
 
    <ul id="cards" class = "fixed-bg2" style="width: 600px">
		<li style = {testStyle.card} class="card" id="card_1">
			<div style = {testStyle.card__content} class="card__content">
				<div >
					<h2><i>"I'm so thankful I can depend on you!"</i></h2>
					<p>-Joan from Minneapolis </p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="card6.jpeg" alt="Image description" />
				</figure>
			</div>
		</li>
		<li class="card" id="card_2">
			<div class="card__content">
				<div>
					<h2><i>"So appreciative of this service- I can finally get some errands done while I'm at work."</i></h2>
					<p>-Brook from Scranton.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="card3.jpeg" alt="Image description" />
				</figure>
			</div>
		</li>
		<li class="card" id="card_3">
			<div class="card__content">
				<div>
					<h2><i>"Thank you so much for your help- it means the world."</i></h2>
					<p>-Addie from Austin.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="card4.jpeg" alt="Image description" />
				</figure>
			</div>
		</li>
		<li class="card" id="card_4">
			<div class="card__content">
				<div>
					<h2><i>"I love helping others throughout my day- I've also created amazing friendships!"</i></h2>
					<p>-Michael from Portland</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="card13.jpeg" alt="Image description" />
				</figure>
			</div>
		</li>
	</ul>

    </>
    );
}
export default Testimonials;
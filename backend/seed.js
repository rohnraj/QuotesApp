const mongoose=require('mongoose')
const Quote=require('./models/Quote')

const dummyInput=[
    {
        authorImg:'https://static01.nyt.com/images/2016/02/20/arts/20harperlee3_hp-copy/20harperlee3_hp-copy-superJumbo-v2.jpg',
        author:'Harper Lee',
        books:['To Kill a Mockingbird', 'Go set a Watchman'],
        disc:'Harper Lee (1926–2016) was an American author best known for her novel To Kill a Mockingbird, published in 1960. The book, which won the Pulitzer Prize, is celebrated for its poignant exploration of themes like racial injustice and moral integrity through the eyes of a young girl named Scout Finch. Set in the fictional town of Maycomb, Alabama, it delves into the complexities of human behavior and empathy. Lee’s only other published novel, Go Set a Watchman, was released in 2015 and is considered a sequel of sorts to her more famous work, though it was written earlier. Lee’s impact on literature and her deep insights into society continue to resonate with readers today.'

    },
    {
        authorImg:'https://mysticbooks.org/image/author/george-orwell.webp',
        author:'George Orwell',
        books:['1984','The Alchemist by Paulo Coelho'],
        disc:'George Orwell (1903–1950) was an English novelist, essayist, and journalist, renowned for his sharp critiques of totalitarianism and social injustice. His most famous works include 1984, a dystopian novel that depicts a grim future under an oppressive regime characterized by surveillance and propaganda, and Animal Farm, an allegorical tale about a group of farm animals who overthrow their human farmer, only to face tyranny from their own kind. Through his writing, Orwell explored themes of power, language, and the manipulation of truth, leaving a lasting legacy that continues to influence political discourse and literature. His works are celebrated for their clarity, insight, and moral urgency.'
    },
    {
        authorImg:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.montblanc.com%2Fen-rs%2Fdiscover%2Fcampaign%2Fwriters-edition-homage-to-jane-austen&psig=AOvVaw2t5bTfSoRLX8WjHK-U109_&ust=1730623559134000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjI-aehvYkDFQAAAAAdAAAAABAK',
        author:'Jane Austen',
        books:['Pride and Prejudice'],
        disc:"Jane Austen (1775–1817) was an English novelist known for her keen observations of early 19th-century British society and her wit in exploring themes of love, marriage, and social class. Her most celebrated works include Pride and Prejudice, which follows the spirited Elizabeth Bennet as she navigates the complexities of romance and societal expectations, and Emma, a novel about a young woman who meddles in the love lives of others, only to discover her own feelings. Austen's novels are characterized by their rich character development, irony, and insight into human behavior, making her one of the most beloved and studied authors in English literature. Her work has had a profound influence on the romantic genre and continues to resonate with readers today."

    },
    {
        authorImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/F._Scott_Fitzgerald_Publicity_Photograph_circa_1920.jpg/800px-F._Scott_Fitzgerald_Publicity_Photograph_circa_1920.jpg',
        author:'F. Scott Fitzgerald',
        books:['The Great Gatsby'],
        disc:"F. Scott Fitzgerald (1896–1940) was an American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century. His most famous work, The Great Gatsby, captures the extravagance and moral decay of the Jazz Age through the story of Jay Gatsby, a mysterious millionaire yearning for love and acceptance. Fitzgerald's writing is noted for its lyrical style, exploration of themes such as the American Dream, love, and disillusionment, and its vivid portrayal of the Roaring Twenties. His life and works reflect both the glamour and the turmoil of his time, and he remains a pivotal figure in American literature, inspiring countless writers and adaptations of his work."
    }
]


async function seedDB(){
    await Quote.insertMany(dummyInput)
    console.log('dummy data added to the DB')
}

module.exports=seedDB
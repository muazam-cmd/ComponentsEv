import Accordion from './../components/Accordion';


function AccordionPage() {
    const items = [
        {
            id: '1',
            lable: 'Can I use React on a Project?',
            content: 'you can use react on any project you want'
        },
        {
            id: '2',
            lable: 'Can I use Javascript on a Project?',
            content: 'you can use react on any project you want'
        },
        {
            id: '3',
            lable: 'Can I use Css on a Project?',
            content: 'you can use react on any project you want'
        },
    ];
    return <Accordion items={items} />
}

export default AccordionPage;

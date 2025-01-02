import PublisherList from "../components/PublisherList";

const Home = () => {
    const groups = [1, 2, 3, 4, 5, 6]; // List of group numbers to render

    return (
        <div className="p-6">
            <h1 className="text-center text-6xl">SVCC PUBLISHERS</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6'>
                {groups.map((groupNumber) => (
                    <div key={groupNumber}>
                        <h2 className='m-4 text-center text-4xl'>GROUP {groupNumber}</h2>
                        <PublisherList groupNumber = {groupNumber}/>
                    </div>
                ))}

              
            </div>

            <div className='pt-6'>
                <h2 className='m-4 text-center text-4xl'>GROUP {7}</h2>
                <PublisherList groupNumber={7}/>
            </div>
            
            
        </div>
    );
};

export default Home;

import { Dumbbell } from "lucide-react";

const Main = () => {
  return (
    <div >
        <div >
            <div >
                {/* <button className='font-bold text-sm  bg-amber-300 px-2 py-1 rounded-xl'>Day</button>
                <button className='font-bold text-sm  bg-amber-300 px-2 py-1 rounded-xl'>Month</button> */}
                <button >Add new</button>
            </div>
            <div >   
                <div >100 Push up</div>
                <div >10 KM Run</div>
                <div >100 Sit up</div>
            </div>
        </div>
        
        <div>
            {/* Timer */}
            <h1>00:00:00</h1>
            {/* Counter */}
            <h1>00</h1>
            <button>
                <Dumbbell size={130} />
            </button>
        </div>

        <div >
            <div>
                <h2>Done</h2>
                <h1>3/7</h1>
            </div>
            <div>
                <h2>Total Time</h2>
                <div>
                    <h1>14:40</h1>
                    <h3>min</h3>
                </div>
            </div>
            <div>🔥12 Day Streak</div>
        </div>
    </div>
  )
}

export default Main
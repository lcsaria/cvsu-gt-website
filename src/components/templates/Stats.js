import React from 'react'
import AnimatedNumber from 'react-animated-number';

function Stats() {
    return (
        <div>
            <div class="row text-center">
                <div class="col-sm">
                <div class="card">
                    <div class="card-body">
                        <h5>STUDENTS</h5>
                        <AnimatedNumber component="text" value={1975}
                        style={{
                            transition: '0.8s ease-out',
                            fontSize: 48,
                            transitionProperty:
                                'background-color, color, opacity'
                        }}
                        duration={1000}
                        stepPrecision={0}/>
                    </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                    <div class="card-body">
                        <h5>FACULTY</h5>
                        <AnimatedNumber component="text" value={50}
                        style={{
                            transition: '0.8s ease-out',
                            fontSize: 48,
                            transitionProperty:
                                'background-color, color, opacity'
                        }}
                        duration={2000}
                        stepPrecision={0}/>
                    </div>
                    </div>
                </div>
                <div class="col-sm">
                <div class="card">
                    <div class="card-body">
                        <h5>STAFF</h5>
                        <AnimatedNumber component="text" value={5}
                        style={{
                            transition: '0.8s ease-out',
                            fontSize: 48,
                            transitionProperty:
                                'background-color, color, opacity'
                        }}
                        duration={2000}
                        stepPrecision={0}/>
                    </div>
                    </div>
                </div>
                <div class="col-sm">
                <div class="card">
                    <div class="card-body">
                        <h5>COURSE</h5>
                        <AnimatedNumber component="text" value={7}
                        style={{
                            transition: '0.8s ease-out',
                            fontSize: 48,
                            transitionProperty:
                                'background-color, color, opacity'
                        }}
                        duration={3000}
                        stepPrecision={0}/>
                    </div>
                    </div>
                </div>
            </div>
                </div>
    )
}

export default Stats

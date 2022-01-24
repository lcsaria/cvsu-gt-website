import React from 'react'
import AnimatedNumber from 'react-animated-number';

function Stats() {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4 text-center">
                <div class="col-sm-3">
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
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                        )}
                        duration={1000}
                        stepPrecision={0}/>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
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
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                        )}
                        duration={2000}
                        stepPrecision={0}/>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
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
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                        )}
                        duration={2000}
                        stepPrecision={0}/>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
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
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                        )}
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

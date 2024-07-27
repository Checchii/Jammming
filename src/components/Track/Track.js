import React from 'react';
import styles from "./Track.module.css";

const Track = (props) => {

    const renderAction = (props) => {
      return <button className='Track-action'>{props.isRemoval ? "-" : "+"}</button>
    }

    return (
        <div className={styles.Track}>
        <div className={styles['Track-information']}>
          {/* <h3><!-- track name will go here --></h3> */}
          
          {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
        {renderAction()}
        </div>
    );
}

export default Track;
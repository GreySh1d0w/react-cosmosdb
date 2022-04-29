import React from 'react';

const EditHero = props => {
  if (props.selectedHero) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>priority: </label>
            {props.addingHero
              ? <input
                  type="number"
                  name="id"
                  placeholder="1 - 5"
                  value={props.selectedHero.id}
                  onChange={props.onChange}
                />
              : <label className="value">
                  {props.selectedHero.id}
                </label>}
          </div>
          <div>
            <label>task: </label>
            <input
              name="name"
              value={props.selectedHero.name}
              placeholder="what to do?"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>time/date: </label>
            <input
              name="saying"
              value={props.selectedHero.saying}
              placeholder="hh:mm - dd:mm:yy"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditHero;

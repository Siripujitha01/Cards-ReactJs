import Faker from 'faker';

function Semantic(props){
    return(
      <div className='one'>
  <div className="ui cards" >
    <div className="card">
      <div className="content">
        <img style={{width:"70px"}} alt="" className="right floated mini ui image" src={Faker.image.image()} />
        <div className="header">
         {props.Name}
        </div>
        <div className="meta">
          Friends of Veronika
        </div>
        <div className="description">
          Elliot requested permission to view your contact details
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="content">
        <img style={{width:"70px"}} alt="" className="right floated mini ui image" src={Faker.image.image()} />
        <div className="header">
          Jenny Hess
        </div>
        <div className="meta">
          New Member
        </div>
        <div className="description">
          Jenny wants to add you to the group <b>best friends</b>
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  </div></div>
  )
  }

  export default Semantic;
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSearch } from '../actions/search';
import { getUser } from "../actions/user";
import GroceryCard from './GroceryCard';


export class GroceryListPage extends React.Component {
    onHandleGroceryList = (recipe, inGrocery) => {
        const {
            favorites,
            user_id,
            recent_searches,
            my_week,
            grocery_list,
            _id
        } = this.props.user;

        const newList = {
            id: recipe.id,
            name: recipe.name,
            ingredients: recipe.ingredientLines,
            servings: recipe.numberOfServings
        }

        let filteredList = [];

        // grocery_list.push(newList)
        if (!inGrocery) {
            toast.info(`Added ${newList.name} to your Grocery List!`);
            grocery_list.push(newList);
        }
        else {
            toast.info(`Updated your Grocery List!`);
            filteredList = grocery_list.filter(grocery => grocery.id != newList.id);
        }

        const updatedUser = {
            favorites,
            user_id,
            recent_searches,
            my_week,
            grocery_list: inGrocery ? filteredList : grocery_list,
            _id
        }

        this.props.saveUser(updatedUser);
    }
    
    render(){
        return(   
        <div>
            {this.props.user.grocery_list.length > 0 ? this.props.user.grocery_list.map((grocery, i)=> (
                <div key={grocery.id} className="col-md-4">
                   <GroceryCard grocery={grocery} key={i} />
                </div>
            ))  : <div></div> }
        </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    saveUser: (user) => dispatch(saveUser(user))
})

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListPage);
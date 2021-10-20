import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';
import ReactionList from '../components/ReactionList/ReactionList';

const SingleThought = () => {
  const { id: thoughtId } = useParams();
console.log(thoughtId);

const { loading, data } = useQuery(QUERY_THOUGHT, {
  variables: { id: thoughtId }
});

const thought = data?.thought || {};

if (loading) {
  return <div>Loading...</div>;
}
  return (
    <div>
  <div className="card mb-3">
    <p className="card-header">
      <span >
        <Link to={`/profile/${thought.username}`} style={{ fontWeight: 700 }} className="text-light">{thought.username}
      </Link></span>{' '}
      thought on {thought.createdAt}
    </p>
    <div className="card-body">
      <p>{thought.thoughtText}</p>
    </div>
  </div>
  {thought.reactionCount ? (  <ReactionList reactions={thought.reactions} />):null}
</div>
  );
};

export default SingleThought;

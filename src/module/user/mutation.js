import { pubsub, UPDATE_USER } from '../../subscription';
const Mutation = {

    updateUsers: async (parent, args, { dataSources }, info) => {
        const user = await dataSources.userApi.updateUser(args.input);
        pubsub.publish(UPDATE_USER, { UpdateUserSub: args });
        return user.data.user;
    }
}

export default Mutation;
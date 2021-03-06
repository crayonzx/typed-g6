/**
 * @fileOverview Handler
 * @author wuyue.lwy <wyueliu@gmail.com>
 */
import Graph from '../graph';

const Handler = {
  registerBehaviour(name: string, fun: (graph: Graph) => void, dependences?: string[]) {
    fun.dependences = dependences;
    Handler[name] = fun;
  },
  resetMode(arr, graph) {
    const hasRunBehaviours = [];
    let behaviour;
    graph._off();
    for (let i = 0; i < arr.length; i++) {
      behaviour = Handler[arr[i]];
      if (!behaviour) {
        continue;
      }
      // deal dependences
      if (behaviour.dependences) {
        behaviour.dependences.forEach(dependence => {
          if (dependence && hasRunBehaviours.indexOf(dependence) === -1) {
            Handler[dependence](graph);
            hasRunBehaviours.push(dependence);
          }
        });
      }
      if (behaviour && hasRunBehaviours.indexOf(behaviour) === -1) {
        behaviour(graph);
      }
    }
  }
};

export = Handler;

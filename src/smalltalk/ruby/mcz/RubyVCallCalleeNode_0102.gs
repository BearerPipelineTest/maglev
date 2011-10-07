
set class RubyVCallCalleeNode
category: '*maglev-runtime'
method:
irNode 
      "ruby_selector_suffix dependent"
  | snd |
  (rcvrNode class == RubySelfNode) ifFalse:[ ^ super irNode ].
  snd := GsComSendNode new .
  RubyCompilerState current compilingEval ifTrue:[
    snd rcvr: (GsComLiteralNode newObject: GsProcess) ;
      stSelector: #_rubyEvalHomeMethod .
  ] ifFalse:[
    snd rcvr: (GsComLiteralNode newObject: Kernel);
      rubySelector: #'__method__#0__' .
  ].
  self ir: snd .
  ^ snd

%


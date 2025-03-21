import Principal "mo:base/Principal";
import Time "mo:base/Time";

module {
  public type Stats = {
    name : Text;
    numberOfMembers : Nat;
    manifesto : Text;
  };

  public type Role = {
    #Student;
    #Graduate;
    #Mentor;
  };

  public type Member = {
    name : Text;
    role : Role;
    github : Text;
  };

  public type ProjectId = Nat;

  public type Project = {
    name : Text;
    url : Text;
    mentor : Principal;
    created : Time.Time;
  };

  public type SubmissionId = Nat;

  public type Submission = {
    project : ProjectId;
    created : Time.Time;
    url : Text;
  };

  public type ProposalId = Nat;

  public type ProposalContent = {
    #ChangeManifesto : Text;
    #AddMentor : Principal;
  };

  public type ProposalStatus = {
    #Open;
    #Accepted;
    #Rejected;
  };

  public type Vote = {
    member : Principal;
    yesOrNo : Bool;
  };

  public type Proposal = {
    content : ProposalContent;
    creator : Principal;
    created : Time.Time;
    executed : ?Time.Time;
    votes : [Vote];
    voteScore : Int;
    status : ProposalStatus;
  };
};

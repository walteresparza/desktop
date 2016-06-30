import Owner, {IOwner} from './owner'

/** The data-only interface for GitHubRepository for transport across IPC. */
export interface IGitHubRepository {
  name: string
  owner: IOwner
}

export default class GitHubRepository {
  private name: string
  private owner: Owner

  public static fromJSON(json: IGitHubRepository): GitHubRepository {
    return new GitHubRepository(json.name, Owner.fromJSON(json.owner))
  }

  public constructor(name: string, owner: Owner) {
    this.name = name
    this.owner = owner
  }

  public getName(): string {
    return this.name
  }

  public getOwner(): Owner {
    return this.owner
  }
}

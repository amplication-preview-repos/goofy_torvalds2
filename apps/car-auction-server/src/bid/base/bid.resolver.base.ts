/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Bid } from "./Bid";
import { BidCountArgs } from "./BidCountArgs";
import { BidFindManyArgs } from "./BidFindManyArgs";
import { BidFindUniqueArgs } from "./BidFindUniqueArgs";
import { CreateBidArgs } from "./CreateBidArgs";
import { UpdateBidArgs } from "./UpdateBidArgs";
import { DeleteBidArgs } from "./DeleteBidArgs";
import { Auction } from "../../auction/base/Auction";
import { BidService } from "../bid.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Bid)
export class BidResolverBase {
  constructor(
    protected readonly service: BidService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bid",
    action: "read",
    possession: "any",
  })
  async _bidsMeta(
    @graphql.Args() args: BidCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Bid])
  @nestAccessControl.UseRoles({
    resource: "Bid",
    action: "read",
    possession: "any",
  })
  async bids(@graphql.Args() args: BidFindManyArgs): Promise<Bid[]> {
    return this.service.bids(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Bid, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bid",
    action: "read",
    possession: "own",
  })
  async bid(@graphql.Args() args: BidFindUniqueArgs): Promise<Bid | null> {
    const result = await this.service.bid(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bid)
  @nestAccessControl.UseRoles({
    resource: "Bid",
    action: "create",
    possession: "any",
  })
  async createBid(@graphql.Args() args: CreateBidArgs): Promise<Bid> {
    return await this.service.createBid({
      ...args,
      data: {
        ...args.data,

        auction: args.data.auction
          ? {
              connect: args.data.auction,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bid)
  @nestAccessControl.UseRoles({
    resource: "Bid",
    action: "update",
    possession: "any",
  })
  async updateBid(@graphql.Args() args: UpdateBidArgs): Promise<Bid | null> {
    try {
      return await this.service.updateBid({
        ...args,
        data: {
          ...args.data,

          auction: args.data.auction
            ? {
                connect: args.data.auction,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Bid)
  @nestAccessControl.UseRoles({
    resource: "Bid",
    action: "delete",
    possession: "any",
  })
  async deleteBid(@graphql.Args() args: DeleteBidArgs): Promise<Bid | null> {
    try {
      return await this.service.deleteBid(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Auction, {
    nullable: true,
    name: "auction",
  })
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "read",
    possession: "any",
  })
  async getAuction(@graphql.Parent() parent: Bid): Promise<Auction | null> {
    const result = await this.service.getAuction(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
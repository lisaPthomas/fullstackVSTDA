namespace VSTDA.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TodoEntries",
                c => new
                    {
                        TodoEntryId = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        Priority = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.TodoEntryId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.TodoEntries");
        }
    }
}
